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
import { TsiWebQuoteAssemblyDetailAdjustment } from './tsiWebQuoteAssemblyDetailAdjustment';


export interface TsiWebQuoteDetailItemModel {
    PriceLevel?: number;
    ProjectPhaseNumber?: number;
    InstallLocation?: string;
    PriceAdjuster?: string;
    ItemDescription?: string;
    OrderByDate?: SystemNullableTsiWebOptionalDateTime;
    Taxable?: boolean;
    SubjectToProviderTax?: boolean;
    PrintOnQuote?: boolean;
    PrintOnInvoice?: boolean;
    ItemCanBeDiscounted?: boolean;
    UseThisCostWhenOrdering?: boolean;
    UseBookPricesAndDiscounts?: boolean;
    CalculateUsingAdjustedDiscountPercent?: boolean;
    AllowPriceLessThanCost?: boolean;
    CanAdjustToMaxDiscount?: boolean;
    AdjustedSellingPrice?: number;
    EstimatedCost?: number;
    Quantity?: number;
    AdjustedDiscountPercent?: number;
    OpenAssemblyAdjustments?: Array<TsiWebQuoteAssemblyDetailAdjustment>;
}
