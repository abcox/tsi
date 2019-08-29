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


export interface TsiWebCreateQuoteDetailNonStockModel {
    LineNumber?: number;
    ProjectPhaseNumber?: number;
    ItemId?: string;
    ItemDescription?: string;
    UnitOfMeasure?: string;
    Type?: string;
    SubjectToSingleItemTax?: boolean;
    SellingPrice?: number;
    ManufacturerListPrice?: number;
    Cost?: number;
    InstallLocation?: string;
    OrderByDate?: Date;
    Taxable?: boolean;
    SubjectToProviderTax?: boolean;
    PrintOnInvoice?: boolean;
    PrintOnQuote?: boolean;
    ItemCanBeDiscounted?: boolean;
    UseThisCostWhenOrdering?: boolean;
    Quantity?: number;
    IsSerialized?: boolean;
}
