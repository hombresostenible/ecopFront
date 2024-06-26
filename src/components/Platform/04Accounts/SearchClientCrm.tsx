/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import Select from 'react-select';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getCrmClients } from '../../../redux/User/crmClientSlice/actions';
import type { RootState, AppDispatch } from '../../../redux/store';
// ELEMENTOS DEL COMPONENTE
import CreateClient from './CreateClientAndSupplier/CreateClient';
import styles from './styles.module.css';

interface SearchClientCrmProps {
    token: string;
    typeSell: string;
    onClientSelect: (value: string | null) => void;
}

function SearchClientCrm ({ token, typeSell, onClientSelect }: SearchClientCrmProps) {
    const dispatch: AppDispatch = useDispatch();

    // Estados de Redux
    const crmClients = useSelector((state: RootState) => state.crmClient.crmClient);

    const [filterText, setFilterText] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string } | null>(null);

    const [showCancelModalCreateClient, setShowCancelModalCreateClient] = useState(false);

    const selectRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        dispatch(getCrmClients(token));
    }, [ token ]);
   
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                selectRef.current &&
                event.target instanceof Node &&
                !selectRef.current.contains(event.target) &&
                selectedOption === null
            ) {
                setFilterText('');
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ selectRef, selectedOption ]);

    const createClientOption = {
        value: 'createClient',
        label: '¿No existe tu cliente? Créalo acá',
    };

    const options = Array.isArray(crmClients) ? crmClients.map((crmClient) => ({
        value: crmClient.documentId,
        label: `${crmClient.documentId} - ${crmClient.name} ${crmClient.lastName}`
    })) : [];
    
    options?.unshift(createClientOption);

    const handleInputChange = (inputValue: string) => {
        setFilterText(inputValue);
    };
    
    const handleSelectChange = (option: { value: string; label: string } | null) => {
        if (option?.value === 'createClient') {
            setShowCancelModalCreateClient(true);
        } else {
            onClientSelect(option?.value || null);  // Solo pasa el valor de `value` como argumento.
            setSelectedOption(option);
        }
    };

    const onCloseCreateClientModal = () => {
        setShowCancelModalCreateClient(false);
    };

    const onCreateClientCreated = (token: string) => {
        dispatch(getCrmClients(token));
    };

    return (
        <div
            ref={selectRef}
            className="mb-3 p-2 d-flex align-items-center justify-content-center border rounded"
        >
            <div className="px-3">                    
                <p className={`${styles.text} mb-0 p-2`}>¿Cuál es el número de identificación de la persona o empresa {(typeSell === 'Credito' || typeSell === 'Credito del Banco' || typeSell === 'CooperativeCredit' || typeSell === 'LoanShark' || typeSell === 'WarehouseCredit' || typeSell === 'PublicUtilitiesCredit') ? 'que te prestó' : 'a la que le vendiste'}?</p>
            </div>
            <div>
                <Select
                    className={`${styles.info} p-1 border rounded border-secundary`}
                    value={selectedOption}
                    inputValue={filterText}
                    onInputChange={handleInputChange}
                    onChange={handleSelectChange}
                    options={options}
                    placeholder='Busca por nombre o número de cédula'
                    isSearchable
                />
            </div>

            <Modal show={showCancelModalCreateClient} onHide={() => setShowCancelModalCreateClient(false)} >
                <Modal.Header closeButton onClick={() => setShowCancelModalCreateClient(false)}>
                    <Modal.Title>Crea tu cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateClient
                        token={token}
                        onCreateComplete={() => {
                            onCloseCreateClientModal();
                        }}
                        onClientCreated={onCreateClientCreated}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default SearchClientCrm;