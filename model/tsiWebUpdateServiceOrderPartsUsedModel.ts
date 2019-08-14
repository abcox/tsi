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
import { SystemNullableTsiWebOptionalDateTime } from './systemNullableTsiWebOptionalDateTime';


export interface TsiWebUpdateServiceOrderPartsUsedModel {
    lineNumber?: number;
    itemDescription?: string;
    useBookPricesAndDiscounts?: boolean;
    allowPriceLessThanCost?: boolean;
    taxable?: boolean;
    subjectToProviderTax?: boolean;
    printOnInvoice?: boolean;
    underContract?: boolean;
    itemCanBeDiscounted?: boolean;
    estimatedCost?: number;
    useThisCostWhenOrdering?: boolean;
    costGLCode?: string;
    incomeGLCode?: string;
    priceLevel?: number;
    sellingPrice?: number;
    quantity?: number;
    serviceOrderItemsServicedNumber?: number;
    memo?: string;
    orderByDate?: SystemNullableTsiWebOptionalDateTime;
    projectPhaseNumber?: number;
    installLocation?: string;
    allowQuantityLessThanOrdered?: boolean;
}
