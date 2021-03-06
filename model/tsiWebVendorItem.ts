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


export interface TsiWebVendorItem {
    Cost?: number;
    Quantity?: number;
    IsStockItem?: boolean;
    IsRepair?: boolean;
    ItemId?: string;
    ItemDescription?: string;
    PriceBookItemType?: string;
    RelatedOrderType?: string;
    RelatedOrderNumber?: number;
    RelatedOrderDetailNumber?: number;
    RelatedOrderAssemblyDetailNumber?: number;
    ExpectedDate?: Date;
}
