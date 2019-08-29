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


export interface TsiWebCreateServiceOrderNonStockModel {
    ItemId?: string;
    Type?: string;
    LineNumber?: number;
    ItemDescription?: string;
    Taxable?: boolean;
    SubjectToProviderTax?: boolean;
    SubjectToSingleItemTax?: boolean;
    IsSerialized?: boolean;
    PrintOnInvoice?: boolean;
    UnderContract?: boolean;
    ManufacturerListPrice?: number;
    SellingPrice?: number;
    Cost?: number;
    UseThisCostWhenOrdering?: boolean;
    Quantity?: number;
    ServiceOrderItemsServicedNumber?: number;
    Memo?: string;
    OrderByDate?: SystemNullableTsiWebOptionalDateTime;
    ProjectPhaseNumber?: number;
    InstallLocation?: string;
    AllowPriceLessThanCost?: boolean;
}
