/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from '../../store';
import axiosInstance from '../../../api/axios';
import { IRawMaterial } from '../../../types/User/rawMaterial.types';
import { rawMaterialData, errorRawMaterial, postRawMaterialStart, postManyRawMaterialsStart, getRawMaterialsStart, getRawMaterialByIdStart, getRawMaterialsByBranchStart, getRawMaterialsOffStart, putRawMaterialStart, putManyRawMaterialsStart, patchRawMaterialStart, patchAddInventoryRawMaterialStart, deleteRawMaterialStart } from './rawMaterialSlice';

//CREAR DE UN EQUIPO, HERRAMIENTA O MAQUINA
export const postRawMaterial = (formData: IRawMaterial, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postRawMaterialStart(formData));
        const response = await axiosInstance.post('/rawMaterial', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(rawMaterialData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorRawMaterial(error.response?.data.message));
        } else {
            dispatch(errorRawMaterial(error.message));
        }
    }
};

//CREAR MUCHAS MATERIAS PRIMAS
export const postManyRawMaterials = (formData: IRawMaterial[], token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postManyRawMaterialsStart(formData));
        const response = await axiosInstance.post('/rawMaterial/create-many', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(rawMaterialData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorRawMaterial(error.response?.data.message));
        } else {
            dispatch(errorRawMaterial(error.message));
        }
    }
};

//OBTIENE TODAS LOS MATERIAS PRIMAS DEL USER
export const getRawMaterials = (token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get('/rawMaterial', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(getRawMaterialsStart(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(errorRawMaterial(error.response?.data.message));
        } else {
            dispatch(errorRawMaterial(error.message));
        }
    }
};

//OBTIENE UNA MATERIAS PRIMAS POR ID
export const getRawMaterialById = (idRawMaterial: string, token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get(`/rawMaterial/${idRawMaterial}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(getRawMaterialByIdStart(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(errorRawMaterial(error.response?.data.message));
        } else {
            dispatch(errorRawMaterial(error.message));
        }
    }
};

//OBTIENE TODAS LAS MATERIAS PRIMAS DEL USER POR SEDE
export const getRawMaterialsByBranch = (idBranch: string, token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get(`/rawMaterial/rawMaterials-branch/${idBranch}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(getRawMaterialsByBranchStart(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(errorRawMaterial(error.response?.data.message));
        } else {
            dispatch(errorRawMaterial(error.message));
        }
    }
};

//OBTENER TODAS LAS MATERIAS PRIMAS DEL USER QUE TENGAN UNIDADES DADAS DE BAJA
export const getRawMaterialsOffS = (token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get('/rawMaterial/rawMaterials-off', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(getRawMaterialsOffStart(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(errorRawMaterial(error.response?.data.message));
        } else {
            dispatch(errorRawMaterial(error.message));
        }
    }
};

//ACTUALIZA UNA MATERIAS PRIMAS DEL USER
export const putRawMaterial = (idRawMaterial: string, formData: IRawMaterial, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(putRawMaterialStart());
        const response = await axiosInstance.put(`/rawMaterial/${idRawMaterial}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(rawMaterialData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorRawMaterial(error.response?.data.message));
        } else {
            dispatch(errorRawMaterial(error.message));
        }
    }
};

//ACTUALIZA MUCHAS MATERIAS PRIMAS DEL USER
export const putManyRawMaterials = (formData: IRawMaterial[], token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(putManyRawMaterialsStart(formData));
        const response = await axiosInstance.put('/rawMaterial/updateMany', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(rawMaterialData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorRawMaterial(error.response?.data.message));
        } else {
            dispatch(errorRawMaterial(error.message));
        }
    }
};

//DA DE BAJA UNA MATERIAS PRIMAS DEL USER
export const patchRawMaterial = (idRawMaterial: string, formData: Partial<IRawMaterial>, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(patchRawMaterialStart());
        const response = await axiosInstance.patch(`/rawMaterial/${idRawMaterial}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(rawMaterialData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorRawMaterial(error.response?.data.message));
        } else {
            dispatch(errorRawMaterial(error.message));
        }
    }
}

//AUMENTA UNIDADES DEL INVENTARIO DE UNA MATERIA PRIMA DEL USER
export const patchAddInventoryRawMaterial = (idRawMaterial: string, formData: IRawMaterial, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(patchAddInventoryRawMaterialStart());
        const response = await axiosInstance.patch(`/rawMaterial/add-inventory/${idRawMaterial}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(rawMaterialData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorRawMaterial(error.response?.data.message));
        } else {
            dispatch(errorRawMaterial(error.message));
        }
    }
}

//ELIMINA UNA MATERIAS PRIMAS DEL USER
export const deleteRawMaterial = (idRawMaterial: string, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(deleteRawMaterialStart());
        const response = await axiosInstance.delete(`/rawMaterial/${idRawMaterial}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(rawMaterialData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(errorRawMaterial(error.response?.data.message));
        } else {
            dispatch(errorRawMaterial(error.message));
        }
    }
};