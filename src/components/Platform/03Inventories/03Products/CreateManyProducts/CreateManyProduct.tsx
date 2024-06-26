/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps, @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
//REDUX
import { postManyProducts } from '../../../../../redux/User/productSlice/actions';
import { getProfileUser } from '../../../../../redux/User/userSlice/actions';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../../redux/store';
import { IBranch } from '../../../../../types/User/branch.types';
import { IProduct } from "../../../../../types/User/products.types";
import styles from './styles.module.css';

interface CreateManyProductsProps {
    branches: IBranch | IBranch[] | null;
    token: string;
    onCreateComplete: () => void;
}

function CreateManyProducts({ branches, token, onCreateComplete }: CreateManyProductsProps) {
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);

    const [excelData, setExcelData] = useState<Array<{ [key: string]: any }> | null>(null);
    const [headers, setHeaders] = useState<string[]>([]);
    const [selectedBranch, setSelectedBranch] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (token) {
            dispatch(getProfileUser(token));
        }
    }, [token]);

    const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBranch(e.target.value);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const data = event.target?.result as string;
                const workbook = XLSX.read(data, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
    
                const parsedData: any[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    
                // Obtener los nombres de las columnas en español desde el archivo de Excel
                const spanishColumnNames: { [key: string]: string } = {
                    "Nombre del producto": "nameItem",
                    "Inventario": "inventory",
                    "Unidad de medida": "unitMeasure",
                    "Precio de venta": "sellingPrice",
                    "IVA": "IVA",
                    "Fecha de vencimiento": "expirationDate",
                    "¿Empacado?": "packaged",
                    "Tipo de empaque principal": "primaryPackageType",
                    "Código de barras": "barCode",
                    "¿Autoincremento?": "inventoryIncrease",
                    "Periodicidad del autoincremento": "periodicityAutomaticIncrease",
                    "Cantidad de aumento automático": "automaticInventoryIncrease",
                    // Agregar más nombres de columnas según sea necesario
                };
    
                // Tomar las filas 4 y 6 como encabezados y datos respectivamente
                const originalHeaders: string[] = parsedData[3] || [];
                const originalData: any[][] = parsedData[5] ? parsedData.slice(5) : [];
    
                // Traducir los encabezados originales al inglés
                const currentHeaders: string[] = originalHeaders.map((header: string) => {
                    // Obtener la traducción en inglés si está disponible, de lo contrario, mantener el nombre original
                    return spanishColumnNames[header] || header;
                });
    
                if (currentHeaders.length > 0) {
                    // Mapear los datos a un formato compatible con el modelo, excluyendo la primera columna
                    const formattedData = originalData.map((row) =>
                        currentHeaders.slice(1).reduce((obj: { [key: string]: any }, header, index) => {
                            obj[header] = row[index + 1];
                            return obj;
                        }, {})
                    );
                    // Establecer los encabezados y los datos traducidos
                    setHeaders(currentHeaders.slice(1));
                    setExcelData(formattedData);
                } else {
                    console.error('No se encontraron encabezados válidos en el archivo Excel.');
                }
            };
            reader.readAsBinaryString(file);
        }
    };

    // Función para traducir los nombres de las columnas de inglés a español
    const englishToSpanishColumnNames: { [key: string]: string } = {
        "nameItem": "Nombre del producto",
        "inventory": "Inventario",
        "unitMeasure": "Unidad de medida",
        "sellingPrice": "Precio de venta",        
        "IVA": "IVA",
        "expirationDate": "Fecha de vencimiento",
        "packaged": "¿Empacado?",
        "primaryPackageType": "Tipo de empaque principal",
        "barCode": "Código de barras",
        "inventoryIncrease": "¿Autoincremento?",
        "periodicityAutomaticIncrease": "Periodicidad del autoincremento",
        "automaticInventoryIncrease": "Cantidad de aumento automático",
        // Agregar más nombres de columnas según sea necesario
    };

    const excelSerialToDate = (serial: number): Date => {
        const startDate = new Date(1900, 0, 1); // 1st January 1900
        return new Date(startDate.getTime() + (serial - 1) * 24 * 60 * 60 * 1000);
    };

    // Función para preparar los datos del formulario antes de enviarlos a Redux
    const prepareFormData = (excelData: any[], selectedBranch: string, user?: { id: string } | null): IProduct[] => {
        if (!excelData || !selectedBranch) return [];
    
        const branchId = selectedBranch;
        const nonEmptyRows = excelData.filter(row => Object.values(row).some(value => !!value));
    
        return nonEmptyRows.map(product => {
            const expirationDate = typeof product.expirationDate === 'number' ? excelSerialToDate(product.expirationDate) : undefined;
    
            const productPrepare: IProduct = {
                id: product.id,
                nameItem: product.nameItem,
                inventory: product.inventory,
                unitMeasure: product.unitMeasure,
                sellingPrice: product.sellingPrice,
                IVA: product.IVA,
                expirationDate: expirationDate,
                packaged: product.packaged,
                primaryPackageType: product.primaryPackageType,
                barCode: product.barCode,
                brandItem: product.brandItem,
                inventoryIncrease: product.inventoryIncrease,
                periodicityAutomaticIncrease: product.periodicityAutomaticIncrease,
                automaticInventoryIncrease: product.automaticInventoryIncrease,
                branchId: branchId,
                userId: user?.id,
            };
            return productPrepare;
        });
    };

    // Función onSubmit actualizada que usa prepareFormData
    const onSubmit = () => {
        if (!excelData || !selectedBranch) return;
        const formData = prepareFormData(excelData, selectedBranch, user);
        dispatch(postManyProducts(formData, token));
        setExcelData(null);
        setMessage('Se guardaron exitosamente los registros');
        setTimeout(() => {
            onCreateComplete();
        }, 1500);
    };

    return (
        <div>
            <div className='mt-3 mb-3 p-2 d-flex flex-column border rounded'>
                <div className={`${styles.containerDownloadFile} mt-3 mb-3 m-auto p-2 d-flex align-items-center justify-content-between border rounded`}>
                    <h6 className='m-0 text-center'>Primero descarga el archivo para que lo diligencies</h6>
                    <a className={`${styles.downloadFile} text-center text-decoration-none`} href="/DownloadExcels/Productos.xlsx" download="Productos.xlsx">Descargar Excel</a>
                </div>
                <p>Recuerda descargar el archivo Excel adjunto para que puedas diligenciarlo con la información de cada uno de tus productos y facilitar la creación masiva en la sede seleccionada.</p>
            </div>

            <div className="mb-3 p-2 d-flex align-items-center justify-content-center border rounded">
                <div>
                    <p className={`${styles.text} mb-0 p-2`}>Selecciona una Sede</p>
                </div>
                <div>
                    <select
                        className={`${styles.info} p-2 border rounded border-secundary`}
                        onChange={handleBranchChange}
                    >
                        <option value=''>Selecciona una Sede</option>
                        {Array.isArray(branches) && branches.map((branch: IBranch, index: number) => (
                            <option key={index} value={branch.id}>
                                {branch.nameBranch}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="d-flex">
                <input type="file" accept=".xlsx" onChange={handleFileUpload} className="m-auto p-1 border rounded text-decoration-none" />
            </div>

            <div className={`${styles.success} m-auto position-relative`}>
                {message && (
                    <p className={`${styles.successMessage} p-1 text-center text-success position-absolute w-100`}>{message}</p>
                )}
            </div> 

            <div className="mt-4 table-responsive">
                {excelData && (
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                {headers.map((header) => (
                                    <th key={header} className="align-middle text-center">
                                        {englishToSpanishColumnNames[header] || header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {excelData.map((row, index) => (
                                Object.values(row).some(value => !!value) && (
                                    <tr key={index}>
                                        {headers.map((header, columnIndex) => (
                                            <td key={columnIndex} className="align-middle text-center">{row[header]}</td>
                                        ))}
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <div className="d-flex">
                <button className={`${styles.buttonSubmit} m-auto border-0 rounded text-decoration-none`} type='button' onClick={onSubmit}>Enviar</button>
            </div>
        </div>
    );
}

export default CreateManyProducts;