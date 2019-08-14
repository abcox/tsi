/**
 * Tigerpaw API Method Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 18.2.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface TsiWebQuoteDetailAssemblyItem {
    quoteDetailAssemblyItemNumber?: number;
    priceLevel?: number;
    cancelledBy?: number;
    invoiceAssemblyDetailNumber?: number;
    serviceOrderAssemblyDetailNumber?: number;
    priceLevelDescription?: string;
    assemblyItemId?: string;
    itemId?: string;
    itemDescription?: string;
    unitOfMeasure?: string;
    taxable?: boolean;
    gSTExempt?: boolean;
    printOnQuote?: boolean;
    printOnInvoice?: boolean;
    subjectToProviderTax?: boolean;
    useThisCostWhenOrdering?: boolean;
    orderByDate?: Date;
    type?: string;
    eachQuantity?: number;
    quantity?: number;
    quantityFilled?: number;
    quantityPosted?: number;
    unitHoursNeeded?: number;
    hoursEntered?: number;
    totalHoursNeeded?: number;
    quantityOrdered?: number;
    quantityReceived?: number;
    manufacturerListPrice?: number;
    bookPrice?: number;
    sellingPrice?: number;
    totalSellingPrice?: number;
    cost?: number;
    totalCost?: number;
    taxableAmount?: number;
    gSTaxableAmount?: number;
    actualUnitCost?: number;
    providerTaxableAmount?: number;
}
