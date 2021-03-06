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
import { TsiWebServiceOrderPartUsedAssemblyDetail } from './tsiWebServiceOrderPartUsedAssemblyDetail';


export interface TsiWebServiceOrderPartUsed {
    PartsUsedNumber?: number;
    ContractDetailNumber?: number;
    InvoiceDetailNumber?: number;
    VendorAccountNumber?: number;
    ProjectPhaseNumber?: number;
    RepairCode?: string;
    InstallLocation?: string;
    NonStockVendorItemNumber?: string;
    AllowVolumePricing?: boolean;
    AssemblyFlag?: boolean;
    IsCommentOnly?: boolean;
    ItemCanBeDiscounted?: boolean;
    SingleItemTaxed?: boolean;
    IsStockItem?: boolean;
    QuantityAvailableToInvoice?: number;
    QuantityShipped?: number;
    QuantityToInvoice?: number;
    QuantityToShip?: number;
    DiscountAmount?: number;
    AdjustmentAmount?: number;
    AdjustmentPercent?: number;
    DiscountPercent?: number;
    IsSerialized?: boolean;
    Assembly?: Array<TsiWebServiceOrderPartUsedAssemblyDetail>;
    ApplyDiscountOff?: string;
    PriceAdjuster?: string;
    ItemID?: string;
    ItemDescription?: string;
    Memo?: string;
    CostGLCode?: string;
    IncomeGLCode?: string;
    RMANumber?: string;
    Type?: string;
    ExchangeFlag?: boolean;
    GSTExempt?: boolean;
    PrintOnInvoice?: boolean;
    SubjectToProviderTax?: boolean;
    Taxable?: boolean;
    UnderContract?: boolean;
    UseThisCostWhenOrdering?: boolean;
    WasTaxed?: boolean;
    InvoiceDate?: Date;
    OrderByDate?: Date;
    Quantity?: number;
    QuantityFilled?: number;
    QuantityInvoiced?: number;
    QuantityOrdered?: number;
    QuantityPosted?: number;
    QuantityReceived?: number;
    ContractNumber?: number;
    ExchangeNumber?: number;
    ItemServicedNumber?: number;
    InvoiceNumber?: number;
    LineNumber?: number;
    PriceLevel?: number;
    ActualUnitCost?: number;
    Cost?: number;
    GSTaxableAmount?: number;
    ManufacturerListPrice?: number;
    ProviderTaxableAmount?: number;
    SellingPrice?: number;
    TaxableAmount?: number;
    TotalCost?: number;
    TotalPostedCost?: number;
    TotalSellingPrice?: number;
}
