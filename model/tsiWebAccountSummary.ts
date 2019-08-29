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
import { TsiWebAccount } from './tsiWebAccount';


export interface TsiWebAccountSummary {
    AccountNumber?: number;
    Account?: TsiWebAccount;
    PhoneNumber?: string;
    FaxNumber?: string;
    RepName?: string;
    RepEmailAddress?: string;
    RepPhoneNumber?: string;
    PrimaryContactName?: string;
    PrimaryContactEmailAddress?: string;
    PrimaryContactPhoneNumber?: string;
    RelatedAccounts?: number;
    ParentAccountNumber?: number;
    JournalEntries?: number;
    OpenInvoices?: number;
    OpenQuotes?: number;
    OpenOpportunities?: number;
    OpenProjectCount?: number;
    OpenServiceOrders?: number;
    PastDueTasks?: number;
    OpenRMAs?: number;
    NumberOfContacts?: number;
}
