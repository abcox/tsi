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
import { TsiWebContractBillToAddress } from './tsiWebContractBillToAddress';


export interface TsiWebUpdateContractModel {
    CalculateContractPrice?: boolean;
    AllowContractPriceOverrideWhenPriceChanges?: boolean;
    Description?: string;
    LimitServiceOrdersToItemsCovered?: boolean;
    AllowContractWithNoPrice?: boolean;
    BillToAddressType?: string;
    AlternateBillToAddressID?: number;
    BillTo?: TsiWebContractBillToAddress;
    ContractType?: string;
    Reference?: string;
    Status?: string;
    VendorContract?: string;
    PaymentType?: string;
    CustomerPONumber?: string;
    ContactName?: string;
    DefaultServiceOrderPriority?: string;
    AssignedTech?: number;
    RepToCredit?: number;
    ModifiedByRepNumber?: number;
    StartDate?: Date;
    EndDate?: Date;
    DateWritten?: Date;
    Price?: number;
    BasePrice?: number;
    UseBasePrice?: boolean;
    UseInvoiceDateForAutoPayment?: boolean;
    UseLastDayOfMonthForPeriodClosing?: boolean;
    BillOverageOnContract?: boolean;
    UseBaseUsagePriceLevel?: boolean;
    UseLastDayOfBillingMonth?: boolean;
    UseLastDayOfMonthForAutoPayment?: boolean;
    BillingCycle?: string;
    BillingStyle?: string;
    SalesTaxCode?: string;
    InvoiceTerms?: string;
    GLIncomeCode?: string;
    PriceBillingText?: string;
    PayMethodName?: string;
    BaseUsageItemID?: string;
    OverageItemID?: string;
    BillDayOfMonth?: number;
    BillStartMonth?: number;
    DaysAheadToInvoice?: number;
    DayOfMonthToPay?: number;
    PayMethod?: number;
    LastDayOfPeriod?: number;
    OveragePriceLevel?: number;
    OverageRate?: number;
    AutoInvoice?: boolean;
    EmailInvoice?: boolean;
    AllowInvoiceConsolidation?: boolean;
    PrintIncludesMemo?: boolean;
    PrintSpecialInstructions?: boolean;
    AutoPay?: boolean;
    Includes?: string;
    SpecialInstructions?: string;
    GeneralNotes?: string;
    TripsIncluded?: number;
    TripsRemaining?: number;
    ResponseHours?: number;
    AdditionalTripCharge?: number;
    CreditUtilizationTime?: boolean;
    UtilizeOverride?: boolean;
    UseLaborOverride?: boolean;
    BillingOverride?: boolean;
    TimeLogRateDiscount?: number;
    FixedHourlyRate?: number;
    LaborBillingType?: string;
    BillingOption?: string;
    DefaultLogReason?: string;
    ContractHours?: number;
    ContractMinutes?: number;
    RatePerHour?: number;
    WarningPercent?: number;
    StartingMeter?: number;
    MaxMeter?: number;
    WarningClicks?: number;
    OverageChargePerClick?: number;
    CurrentMeter?: number;
    PrePaidAmount?: number;
    MaxUnits?: number;
    ChargePerUnit?: number;
    PeriodBaseHours?: number;
    PeriodUsageCycle?: string;
    RoundingFactor?: string;
    AllowContractWithNoHours?: boolean;
    PeriodBaseClicks?: number;
}
