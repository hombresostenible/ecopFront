import { configureStore } from '@reduxjs/toolkit';
import accountsBookReducer from './User/accountsBookSlice/accountsBookSlice';
import assetsReducer from './User/assetsSlice/assetsSlice';
import branchReducer from './User/branchSlice/branchSlice';
import crmClientReducer from './User/crmClientSlice/crmClientSlice';
import crmSupplierReducer from './User/crmSupplierSlice/crmSupplierSlice';
import merchandiseReducer from './User/merchandiseSlice/merchandiseSlice';
import productReducer from './User/productSlice/productSlice';
import rawMaterialReducer from './User/rawMaterialSlice/rawMaterialSlice';
import serviceReducer from './User/serviceSlice/serviceSlice';
import userReducer from './User/userSlice/userSlice';
import userPlatformReducer from './User/userPlatformSlice/userPlatformSlice';
// Define RootState
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        accountsBook: accountsBookReducer,
        assets: assetsReducer,
        branch: branchReducer,
        crmClient: crmClientReducer,
        crmSupplier: crmSupplierReducer,
        merchandise: merchandiseReducer,
        product: productReducer,
        rawMaterial: rawMaterialReducer,
        service: serviceReducer,
        user: userReducer,
        userPlatform: userPlatformReducer,
    },
});

export type AppDispatch = typeof store.dispatch;