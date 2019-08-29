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


export interface TsiWebUpdateServiceOrderTimeLogModel {
    BillingOption?: string;
    CheckCompanyBusinessHours?: boolean;
    Tech?: number;
    RateBasis?: string;
    CopyCommentsIndicator?: string;
    DeductHours?: number;
    InternalComments?: string;
    Comment?: string;
    Reason?: string;
    CreditUtilizationTime?: boolean;
    StartDateTime?: Date;
    EndDateTime?: Date;
    LogReasonLaborRate?: number;
    DeductMinutes?: number;
    TimeToInvoice?: string;
    BillableHours?: number;
    BillableMinutes?: number;
    ServiceOrderStatus?: string;
    RejectedStatusReason?: string;
    AcceptanceStatus?: string;
}
