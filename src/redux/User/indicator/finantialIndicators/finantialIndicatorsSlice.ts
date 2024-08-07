/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FinantialIndicatorState {
    salesPerPeriod: any;                        //
    expensesPerPeriod: any;                     //
    allTransactionsPerPeriod: any;              //
    accountsReceivable: any;                    //
    accountsPayable: any;                       //
    bestClientValue: any;                       //
    bestClientQuantity: any;                    //
    averageTicketPerPeriod: any;                //
    assetsInventory: any;                       //
    merchandisesInventory: any;                 //
    productsInventory: any;                     //
    rawmaterialsInventory: any;                 //
    loading: boolean;
    errorFinantialIndicator: string[] | null;
}

const initialState: FinantialIndicatorState = {
    salesPerPeriod: null,
    expensesPerPeriod: null,
    allTransactionsPerPeriod: null,
    accountsReceivable: null,
    accountsPayable: null,
    bestClientValue: null,
    bestClientQuantity: null,
    averageTicketPerPeriod: null,
    assetsInventory: null,
    merchandisesInventory: null,
    productsInventory: null,
    rawmaterialsInventory: null,
    loading: false,
    errorFinantialIndicator: null,
};

const finantialIndicatorsSlice = createSlice({
    name: 'finantialIndicator',
    initialState,
    reducers: {
        errorFinantialIndicator: (state, action: PayloadAction<string[]>) => {
            state.loading = false;
            state.errorFinantialIndicator = action.payload;
        },
        getSalesPerPeriodStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.salesPerPeriod = action.payload;
            state.errorFinantialIndicator = null;
        },
        getSalesPerPeriodByBranchStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.salesPerPeriod = action.payload;
            state.errorFinantialIndicator = null;
        },
        getExpensesPerPeriodStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.expensesPerPeriod = action.payload;
            state.errorFinantialIndicator = null;
        },
        getExpensesPerPeriodByBranchStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.expensesPerPeriod = action.payload;
            state.errorFinantialIndicator = null;
        },
        getAllTransactionsPerPeriodStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.allTransactionsPerPeriod = action.payload;
            state.errorFinantialIndicator = null;
        },
        getAllTransactionsPerPeriodByBranchStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.allTransactionsPerPeriod = action.payload;
            state.errorFinantialIndicator = null;
        },
        getAccountsReceivableStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.accountsReceivable = action.payload;
            state.errorFinantialIndicator = null;
        },
        getAccountsReceivableByBranchStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.accountsReceivable = action.payload;
            state.errorFinantialIndicator = null;
        },
        getAccountsPayableStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.accountsPayable = action.payload;
            state.errorFinantialIndicator = null;
        },
        getAccountsPayableByBranchStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.accountsPayable = action.payload;
            state.errorFinantialIndicator = null;
        },
        getBestClientValueStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.bestClientValue = action.payload;
            state.errorFinantialIndicator = null;
        },
        getBestClientValueByBranchStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.bestClientValue = action.payload;
            state.errorFinantialIndicator = null;
        },
        getBestClientQuantityStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.bestClientQuantity = action.payload;
            state.errorFinantialIndicator = null;
        },
        getBestClientQuantityByBranchStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.bestClientQuantity = action.payload;
            state.errorFinantialIndicator = null;
        },
        getAverageTicketPerPeriodStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.averageTicketPerPeriod = action.payload;
            state.errorFinantialIndicator = null;
        },
        getAverageTicketPerPeriodByBranchStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.averageTicketPerPeriod = action.payload;
            state.errorFinantialIndicator = null;
        },
        getProductsInventoryStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.productsInventory = action.payload;
            state.errorFinantialIndicator = null;
        },
        getProductsInventoryByBranchStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.productsInventory = action.payload;
            state.errorFinantialIndicator = null;
        },
        getRawmaterialsInventoryStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.rawmaterialsInventory = action.payload;
            state.errorFinantialIndicator = null;
        },
        getRawmaterialsInventoryByBranchStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.rawmaterialsInventory = action.payload;
            state.errorFinantialIndicator = null;
        },
        getAssetsInventoryStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.assetsInventory = action.payload;
            state.errorFinantialIndicator = null;
        },
        getAssetsInventoryByBranchStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.assetsInventory = action.payload;
            state.errorFinantialIndicator = null;
        },
        getMerchandisesInventoryStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.merchandisesInventory = action.payload;
            state.errorFinantialIndicator = null;
        },
        getMerchandisesInventoryByBranchStart: (state, action: PayloadAction<any  | null>) => {
            state.loading = true;
            state.merchandisesInventory = action.payload;
            state.errorFinantialIndicator = null;
        },
    },
});

export const {
    errorFinantialIndicator,
    getSalesPerPeriodStart,
    getSalesPerPeriodByBranchStart,
    getExpensesPerPeriodStart,
    getExpensesPerPeriodByBranchStart,
    getAllTransactionsPerPeriodStart,
    getAllTransactionsPerPeriodByBranchStart,
    getAccountsReceivableStart,
    getAccountsReceivableByBranchStart,
    getAccountsPayableStart,
    getAccountsPayableByBranchStart,
    getBestClientValueStart,
    getBestClientValueByBranchStart,
    getBestClientQuantityStart,
    getBestClientQuantityByBranchStart,
    getAverageTicketPerPeriodStart,
    getAverageTicketPerPeriodByBranchStart,
    getProductsInventoryStart,
    getProductsInventoryByBranchStart,
    getRawmaterialsInventoryStart,
    getRawmaterialsInventoryByBranchStart,
    getAssetsInventoryStart,
    getAssetsInventoryByBranchStart,
    getMerchandisesInventoryStart,
    getMerchandisesInventoryByBranchStart,
} = finantialIndicatorsSlice.actions;
export default finantialIndicatorsSlice.reducer;