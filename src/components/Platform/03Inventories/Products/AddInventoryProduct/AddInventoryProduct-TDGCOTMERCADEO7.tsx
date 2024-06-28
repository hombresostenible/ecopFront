/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { patchAddInventoryProduct, getProducts } from '../../../../../redux/User/productSlice/actions';
import type { RootState, AppDispatch } from '../../../../../redux/store';
// ELEMENTOS DEL COMPONENTE
import { IProduct } from '../../../../../types/User/products.types';
import styles from './styles.module.css';

interface AddInventoryProductProps {
    token: string;
    idItem: string;
    nameItem?: string;
    idBranch: string;
    onCloseModal: () => void;
}
function AddInventoryProduct({ token, idItem, nameItem, idBranch, onCloseModal }: AddInventoryProductProps) {
    const dispatch: AppDispatch = useDispatch();

    // Estados de Redux
    const errorProduct = useSelector((state: RootState) => state.product.errorProduct);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IProduct>();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSubmit = async (values: IProduct) => {
        try {
            const formData = {
                ...values,
                branchId: idBranch,
            } as IProduct;
            dispatch(patchAddInventoryProduct(idItem, formData, token));
            setFormSubmitted(true);
            await new Promise(resolve => setTimeout(resolve, 500));
            dispatch(getProducts(token));
            onCloseModal();
            reset();
        } catch (error) {
            throw new Error('Error en el envío del formulario');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                {formSubmitted && (
                    <div className={`${styles.alert__Success} text-center position-absolute alert-success`}>El formulario se ha enviado con éxito</div>
                )}
                {Array.isArray(errorProduct) && errorProduct?.map((error, i) => (
                    <div key={i} className={`${styles.alert__Danger} text-center position-absolute alert-danger`}>{error}</div>
                ))}

                <div className={`${styles.container__Info} mt-5 m-auto d-flex flex-column align-items-center justify-content-between`}>
                    <div className={`${styles.name__Item} mb-3`}>
                        {nameItem}
                    </div>
                    <div className={`${styles.inventory} mb-3 d-flex align-items-center justify-content-between`}>
                        <p className={`${styles.text} mb-0`} >Valor a agregar</p>
                        <input
                            type="number"
                            {...register('inventory', { required: true, setValueAs: (value) => parseFloat(value) })}
                            className={`${styles.input} p-2 border`}
                            placeholder='Tu inventario acá'
                            min={0}
                            onKeyDown={(e) => {
                                if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.') {
                                    e.preventDefault();
                                }
                            }}
                        />
                        {errors.inventory && (
                            <p className='text-danger'>El inventario es requerido</p>
                        )}
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <button type='submit' className={`${styles.button__Submit} border-0 rounded text-decoration-none`} >Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddInventoryProduct;