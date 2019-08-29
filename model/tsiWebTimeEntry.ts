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


export interface TsiWebTimeEntry {
    EntryType?: string;
    TimeEntryKeyNumber?: number;
    ServiceOrderNumber?: number;
    SOBriefDescription?: string;
    SOWorkPerformed?: string;
    LogReason?: string;
    TechAssigned?: number;
    TechAssignedName?: string;
    StartDateTime?: Date;
    EndDateTime?: Date;
    LogHours?: number;
    LogMinutes?: number;
    ElapsedHours?: number;
    ElapsedMinutes?: number;
    UtilizationHours?: number;
    UtilizationMinutes?: number;
    AccountNumber?: number;
    AccountName?: string;
    AcceptanceStatus?: number;
    InternalComments?: string;
    LogComment?: string;
    Billable?: boolean;
    Chargable?: boolean;
    BillingOption?: string;
    UnitFactor?: number;
    TotalUnits?: number;
    ContractNumber?: number;
}
