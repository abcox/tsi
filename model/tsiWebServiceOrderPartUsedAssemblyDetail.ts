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


export interface TsiWebServiceOrderPartUsedAssemblyDetail {
    partUsedAssemblyDetailNumber?: number;
    invoiceAssemblyDetailNumber?: number;
    eachQuantity?: number;
    itemID?: string;
    itemDescription?: string;
    memo?: string;
    costGLCode?: string;
    incomeGLCode?: string;
    rMANumber?: string;
    type?: string;
    exchangeFlag?: boolean;
    gSTExempt?: boolean;
    printOnInvoice?: boolean;
    subjectToProviderTax?: boolean;
    taxable?: boolean;
    underContract?: boolean;
    useThisCostWhenOrdering?: boolean;
    wasTaxed?: boolean;
    invoiceDate?: Date;
    orderByDate?: Date;
    quantity?: number;
    quantityFilled?: number;
    quantityInvoiced?: number;
    quantityOrdered?: number;
    quantityPosted?: number;
    quantityReceived?: number;
    contractNumber?: number;
    exchangeNumber?: number;
    itemServicedNumber?: number;
    invoiceNumber?: number;
    lineNumber?: number;
    priceLevel?: number;
    actualUnitCost?: number;
    cost?: number;
    gSTaxableAmount?: number;
    manufacturerListPrice?: number;
    providerTaxableAmount?: number;
    sellingPrice?: number;
    taxableAmount?: number;
    totalCost?: number;
    totalPostedCost?: number;
    totalSellingPrice?: number;
}