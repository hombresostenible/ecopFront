/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import Select from 'react-select';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../redux/User/searchItems/actions';
import type { RootState, AppDispatch } from '../../redux/store';
// ELEMENTOS DEL COMPONENTE
import { IAssets } from "../../types/User/assets.types";
import { IMerchandise } from "../../types/User/merchandise.types";
import { IProduct } from "../../types/User/products.types";
import { IRawMaterial } from "../../types/User/rawMaterial.types";
import { IService } from "../../types/User/services.types";
import CreateItem from '../CreateItem/CreateItem';
import { StylesReactSelect } from '../StylesComponents/StylesReactSelect';

interface SearchItemsBynameProps {
    branch: string;
    token: string;
    onItemSelect?: (item: any) => void;
    onDataItemSelect?: (data: IAssets | IMerchandise | IProduct | IRawMaterial | IService) => void;
}

interface OptionType {
    label: string;
    data?: IAssets | IMerchandise | IProduct | IRawMaterial | IService;
}

function SearchItemsByname({ branch, token, onItemSelect, onDataItemSelect }: SearchItemsBynameProps) {
    console.log('token: ', token)
    const dispatch: AppDispatch = useDispatch();

    // Estados de Redux
    const items = useSelector((state: RootState) => state.searchItems.items);
    
    const [filterText, setFilterText] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const [showCancelModalCreateItem, setshowCancelModalCreateItem] = useState(false);
    const selectRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        dispatch(getItems(branch, token));
    }, [branch, token]);

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
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectRef, selectedOption]);

    const createItemOption: OptionType = {
        label: '¿No existe el artículo? Créalo acá',
    };

    const filteredOptions: OptionType[] = Array.isArray(items)
        ? items
              .filter((item) =>
                item?.nameItem && item.nameItem.toLowerCase().includes(filterText.toLowerCase())
              )
              .map((item) => ({
                label: `${item.nameItem}`,
                data: item,
            }))
        : [];

    filteredOptions.unshift(createItemOption);

    const handleInputChange = (inputValue: string) => {
        setFilterText(inputValue);
    };

    const handleSelectChange = (option: OptionType | null) => {
        if (option?.label === '¿No existe el artículo? Créalo acá') {
            setshowCancelModalCreateItem(true);
        } else {
            if (onItemSelect && option?.data) {
                onItemSelect(option.data);
            }
            if (onDataItemSelect && option?.data) {
                onDataItemSelect(option.data);
            }
            setSelectedOption(null);
            setFilterText('');
        }
    };

    const onCloseCreateItemModal = () => {
        setshowCancelModalCreateItem(false);
    };

    const onCreateItem = (token: string) => {
        dispatch(getItems(branch, token));
    };

    return (
        <div ref={selectRef} className="d-flex align-items-center justify-content-center">
            <div>
                <Select
                    value={selectedOption}
                    inputValue={filterText}
                    onInputChange={handleInputChange}
                    onChange={handleSelectChange}
                    options={filteredOptions}
                    placeholder="Busca por nombre"
                    isSearchable
                    styles={StylesReactSelect}
                />
            </div>

            <Modal show={showCancelModalCreateItem} onHide={onCloseCreateItemModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Crea tu artículo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateItem
                        token={token}
                        onCreateComplete={onCloseCreateItemModal}
                        onItemCreated={onCreateItem}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default SearchItemsByname;