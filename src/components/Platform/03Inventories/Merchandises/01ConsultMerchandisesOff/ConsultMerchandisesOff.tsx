/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../../redux/store';
import { patchMerchandise, getMerchandisesOff, getMerchandises } from '../../../../../redux/User/merchandiseSlice/actions';
// ELEMENTOS DEL COMPONENTE
import { IMerchandise } from '../../../../../types/User/merchandise.types';
import { IBranch } from '../../../../../types/User/branch.types';
import styles from './styles.module.css';

interface ConsultMerchandisesOffProps {
    token: string;
    branches: IBranch[] | null;
    onCloseModal: () => void;
}

function ConsultMerchandisesOff({ token, branches, onCloseModal }: ConsultMerchandisesOffProps) {
    const dispatch: AppDispatch = useDispatch();

    // Estados de Redux
    const merchandiseOff = useSelector((state: RootState) => state.merchandise.merchandiseOff);

    useEffect(() => {
        if (token) {
            dispatch(getMerchandisesOff(token));
        }
    }, [token]);

    const calculateTotalInventoryOff = (inventoryOff: { quantity: number }[] = []) => {
        return inventoryOff.reduce((total, item) => total + item.quantity, 0);
    };

    //ESTA FUNCION EDITA LAS MERCANCIAS DADAS DE BAJA
    const onSubmit = (idMerchandise: string) => {
        try {
            const assetData: IMerchandise = {
                inventoryOff: [{
                    date: new Date(),
                    quantity: 1, // O cualquier valor apropiado
                    reason: "Activo en uso",
                    description: "Activo en uso",
                }],
            } as IMerchandise;
            dispatch(patchMerchandise(idMerchandise, assetData, token));
            onCloseModal();
            dispatch(getMerchandises(token));
        } catch (error) {
            throw new Error('Error en el envío del formulario');
        }
    };

    return (
        <div className="m-auto w-100">
            <div className="mt-4 table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th className="align-middle text-center" style={{ color: "#343a40", height: "50px" }}>Sede</th>
                            <th className="align-middle text-center" style={{ color: "#343a40", height: "50px" }}>Nombre del item</th>
                            <th className="align-middle text-center" style={{ color: "#343a40", height: "50px" }}>Cantidad</th>
                            <th className="align-middle text-center" style={{ color: "#343a40", height: "50px" }}>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.isArray(merchandiseOff) && merchandiseOff.length > 0 ? (
                            merchandiseOff.map((asset) => (
                                <tr key={asset.id}>
                                    <td className='align-middle text-center'>
                                        <span>
                                            {branches && branches.map((branch, index) => (
                                                asset.branchId === branch.id && (
                                                    <span className="text-center" key={index}>{branch.nameBranch}</span>
                                                )
                                            ))}
                                        </span>
                                    </td>
                                    <td className='align-middle text-center'>
                                        <span>{asset.nameItem}</span>
                                    </td>
                                    <td className='align-middle text-center'>
                                        <span>{calculateTotalInventoryOff(asset.inventoryOff)}</span>
                                    </td>
                                    <td className='d-flex align-items-center justify-content-center align-middle text-center'>
                                        <div
                                            className={styles.dsdsdsdsdsd}
                                            onClick={() => {
                                                onSubmit(asset.id); // Llamamos a onSubmit al hacer clic en "Normalizar"
                                            }}
                                        >
                                            Editar
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8} className="text-center">
                                    No hay mercancías dadas de baja
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ConsultMerchandisesOff;