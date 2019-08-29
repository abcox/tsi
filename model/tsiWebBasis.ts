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


export interface TsiWebBasis {
    ContractHours?: number;
    ContractMinutes?: number;
    RatePerHour?: number;
    HoursRemaining?: number;
    MinutesRemaining?: number;
    HoursUsed?: number;
    MinutesUsed?: number;
    OverUnderIndicator?: string;
    MaxMeter?: number;
    WarningClicks?: number;
    OverageChargePerClick?: number;
    MeterRemaining?: number;
    StartingMeter?: number;
    CurrentMeter?: number;
    PrePaidAmount?: number;
    WarningPercent?: number;
    AmountRemaining?: number;
    CurrentDollars?: number;
    MaxUnits?: number;
    ChargePerUnit?: number;
    UnitsRemaining?: number;
    UnitsUsed?: number;
    PeriodBaseHours?: number;
    PeriodUsageCycle?: string;
    RoundingFactor?: string;
    PeriodUsage?: number;
    PeriodOverageBilled?: number;
    PeriodHours?: number;
    ToDateTotalHours?: number;
    ToDateTotalDollars?: number;
    PeriodBaseClicks?: number;
    UsagePeriodStart?: Date;
    UsagePeriodEnd?: Date;
    UsageQuantity?: number;
    PeriodStartingMeter?: number;
}
