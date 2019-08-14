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
import { TsiWebAccountExternalProduct } from './tsiWebAccountExternalProduct';
import { TsiWebAccountMarketingDetail } from './tsiWebAccountMarketingDetail';
import { TsiWebAccountServiceDetail } from './tsiWebAccountServiceDetail';
import { TsiWebAccountSystem } from './tsiWebAccountSystem';
import { TsiWebAccountingDetail } from './tsiWebAccountingDetail';
import { TsiWebAssignedMarketingGroup } from './tsiWebAssignedMarketingGroup';
import { TsiWebAssignedMarketingProfile } from './tsiWebAssignedMarketingProfile';
import { TsiWebAssignedSICCode } from './tsiWebAssignedSICCode';
import { TsiWebBillTo } from './tsiWebBillTo';
import { TsiWebCoManagedTechnician } from './tsiWebCoManagedTechnician';
import { TsiWebCustomField } from './tsiWebCustomField';
import { TsiWebPayMethod } from './tsiWebPayMethod';
import { TsiWebPerson } from './tsiWebPerson';
import { TsiWebPhoneNumber } from './tsiWebPhoneNumber';
import { TsiWebShipTo } from './tsiWebShipTo';


export interface TsiWebAccountDetail {
    accountNumber?: number;
    account?: TsiWebAccount;
    accounting?: TsiWebAccountingDetail;
    marketing?: TsiWebAccountMarketingDetail;
    service?: TsiWebAccountServiceDetail;
    primaryContact?: TsiWebPerson;
    primaryRep?: TsiWebPerson;
    phoneNumbers?: Array<TsiWebPhoneNumber>;
    shipTos?: Array<TsiWebShipTo>;
    billTos?: Array<TsiWebBillTo>;
    payMethods?: Array<TsiWebPayMethod>;
    externalProducts?: Array<TsiWebAccountExternalProduct>;
    systems?: Array<TsiWebAccountSystem>;
    coManagedTechnicians?: Array<TsiWebCoManagedTechnician>;
    groups?: Array<TsiWebAssignedMarketingGroup>;
    profiles?: Array<TsiWebAssignedMarketingProfile>;
    sICCodes?: Array<TsiWebAssignedSICCode>;
    customFields?: Array<TsiWebCustomField>;
    relatedAccounts?: number;
    parentAccountNumber?: number;
    journalEntries?: number;
    openInvoices?: number;
    openQuotes?: number;
    openOpportunities?: number;
    openProjectCount?: number;
    openServiceOrders?: number;
    pastDueTasks?: number;
    openRMAs?: number;
    numberOfContacts?: number;
}