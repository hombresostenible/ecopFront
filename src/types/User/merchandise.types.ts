export interface IInventoryOffItem {
    date: Date;
    reason: "Activo en uso" | "Activo en reposo" | "Dañado" | "Donado" | "Desechado" | "Reciclado" | "Vendido";
    quantity: number;
    description?: string;
}

export interface IWithholdingTax {
    retentionType?: 'No tiene' | 'Retefuente' | 'Rete IVA' | 'Rete ICA';
    retention?: 'retentionFeesConsulting' | 'retentionServices' | 'retentionPurchases' | 'retentionOthers' | 'retentionForeignPaymentsDividends';
    retentionPercentageFeesConsulting?: '2' | '4' | '6' | '10' | '11';
    retentionPercentageServices?: '1' | '2' | '3.5' | '4' | '6';
    retentionPercentagePurchases?: '0.1' | '0.5' | '1' | '1.5' | '2.5' | '3' | '3.5';
    retentionPercentageOthers?: '2' | '2.5' | '3' | '4' | '7' | '10' | '20';
    retentionPercentageForeignPaymentsDividends?: '0' | '1' | '2' | '5' | '7' | '8' | '10' | '15' | '20' | '33' | '35' | '35 + Num. 51';
    retentionPercentageIVA?: '15' | '100';
    retentionPercentageICA?: '2' | '3.4' | '4.14' | '5' | '6.9' | '8' | '9.66' | '11.04' | '13.8';
}

export interface IMerchandise {
    id: string;
    barCode?: string;
    nameItem: string;
    brandItem?: string;
    packaged?: 'Si' | 'No';
    primaryPackageType?: 'Ninguno' | 'Papel' | 'Papel de archivo' | 'Carton' | 'Aluminio' | 'Plegadiza' | 'Vidrio' | 'PET / PETE Polietileno Tereftalato' | 'HDPE Polietileno de alta densidad' | 'PVC Policloruro de Vinilo' | 'LDPE Polietileno de baja densidad' | 'PP Polipropileno' | 'PS Poliestireno' | 'Otros plasticos (Policarbonato, estireno, nylon)' | 'Hierro' | 'Icopor' | 'Biodegradable' | 'Plastico de burbujas';
    individualPackaging?: 'Si' | 'No';
    secondaryPackageType?: 'Ninguno' | 'Papel' | 'Papel de archivo' | 'Carton' | 'Aluminio' | 'Plegadiza' | 'Vidrio' | 'PET / PETE Polietileno Tereftalato' | 'HDPE Polietileno de alta densidad' | 'PVC Policloruro de Vinilo' | 'LDPE Polietileno de baja densidad' | 'PP Polipropileno' | 'PS Poliestireno' | 'Otros plasticos (Policarbonato, estireno, nylon)' | 'Hierro' | 'Icopor' | 'Biodegradable' | 'Plastico de burbujas';
    quantityPerPackage?: number;
    returnablePackaging?: 'Si' | 'No';
    inventory: number;
    unitMeasure: 'Unidades' | 'Ristra' | 'Decena' | 'Docena' | 'Miligramo' | 'Gramo' | 'Media libra' | 'Libra' | 'Kilogramo' | 'Caja' | 'Paca' | 'Arroba' | 'Bulto' | 'Saco' | 'Tonelada' | 'Mililitro' | 'Onza' | 'Botella' | 'Litro' | 'Galon' | 'Pimpina' | 'Metro cubico' | 'Milimetro' | 'Centrimetro' | 'Pulgada' | 'Metro' | 'Centimetro cuadrado' | 'Metro cuadrado';
    inventoryIncrease?: 'Si' | 'No';
    periodicityAutomaticIncrease?: 'Diario' | 'Semanal' | 'Quincenal' | 'Mensual' | 'Bimestral' | 'Trimestral' | 'Semestral';
    automaticInventoryIncrease?: number;
    purchasePriceBeforeTax: number;
    sellingPrice: number;
    isDiscounted?: 'Si' | 'No';
    discountPercentage?: number;
    expirationDate?: Date;
    inventoryChanges?: { date: string; quantity: number, type: 'Ingreso' | 'Salida' }[];
    salesCount?: number;
    inventoryOff?: IInventoryOffItem[];
    reasonManualDiscountingInventory?: 'Donado' | 'Desechado' | 'Caducado' | 'Perdido' | 'Hurtado';
    quantityManualDiscountingInventory?: number;
    // Retenciones
    retentions: IWithholdingTax[];
    // Impuestos
    IVA: 0 | 5 | 19;
    consumptionTax?: 4 | 8 | 16;
    ivaAiu?: 0 | 1;
    taxesUltraProcessedSugarSweetenedBeverages?: number;
    valueTaxesUltraProcessedSugarSweetenedBeverages?: 0 | 18 | 28 | 35 | 38 | 55 | 65;
    taxesUltraProcessedFoodProducts?: 10 | 15 | 20;
    //RELACION CON OTRAS TABLAS
    branchId: string;
    userId?: string;
}