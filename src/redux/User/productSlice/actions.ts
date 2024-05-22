/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from '../../store';
import axiosInstance from '../../../api/axios';
import { IProduct } from '../../../types/User/products.types';
import { productData, errorProduct, postProductStart, postManyProductsStart, getProductsStart, getProductByIdStart, getProductsByBranchStart, putProductStart, putManyProductsStart, patchProductStart, deleteProductStart } from './productSlice';

//CREAR DE UN PRODUCTO
export const postProduct = (formData: IProduct, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postProductStart(formData));
        const response = await axiosInstance.post('/product', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(productData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorProduct(error.response?.data.message));
        } else {
            dispatch(errorProduct(error.message));
        }
    }
};

//CREAR MUCHOS PRODUCTO
export const postManyProducts = (formData: IProduct[], token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postManyProductsStart(formData));
        const response = await axiosInstance.post('/product/createMany', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(productData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorProduct(error.response?.data.message));
        } else {
            dispatch(errorProduct(error.message));
        }
    }
};

//OBTIENE TODOS LOS PRODUCTO DEL USER
export const getProducts = (token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get('/product', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(getProductsStart(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(errorProduct(error.response?.data.message));
        } else {
            dispatch(errorProduct(error.message));
        }
    }
};

//OBTIENE UN PRODUCTO POR ID
export const getProductById = (idProduct: string, token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get(`/product/${idProduct}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(getProductByIdStart(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(errorProduct(error.response?.data.message));
        } else {
            dispatch(errorProduct(error.message));
        }
    }
};

//OBTIENE TODOS LOS PRODUCTO DEL USER POR SEDE
export const getProductsByBranch = (idBranch: string, token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get(`/product/products-branch/${idBranch}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(getProductsByBranchStart(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(errorProduct(error.response?.data.message));
        } else {
            dispatch(errorProduct(error.message));
        }
    }
};

//ACTUALIZA UN PRODUCTO DEL USER
export const putProduct = (idProduct: string, formData: IProduct, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(putProductStart());
        const response = await axiosInstance.put(`/product/${idProduct}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(productData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorProduct(error.response?.data.message));
        } else {
            dispatch(errorProduct(error.message));
        }
    }
};

//ACTUALIZA MUCHOS PRODUCTO DEL USER
export const putManyProducts = (formData: IProduct[], token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(putManyProductsStart(formData));
        const response = await axiosInstance.put('/product/updateMany', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(productData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorProduct(error.response?.data.message));
        } else {
            dispatch(errorProduct(error.message));
        }
    }
};

//DA DE BAJA UN PRODUCTO DEL USER
export const patchProduct = (idProduct: string, formData: IProduct, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(patchProductStart());
        const response = await axiosInstance.patch(`/product/${idProduct}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(productData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorProduct(error.response?.data.message));
        } else {
            dispatch(errorProduct(error.message));
        }
    }
}

//ELIMINA UN PRODUCTO DEL USER
export const deleteProduct = (idProduct: string, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(deleteProductStart());
        const response = await axiosInstance.delete(`/product/${idProduct}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(productData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorProduct(error.response?.data.message));
        } else {
            dispatch(errorProduct(error.message));
        }
    }
};