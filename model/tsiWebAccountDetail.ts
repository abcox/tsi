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
    AccountNumber?: number;
    Account?: TsiWebAccount;
    Accounting?: TsiWebAccountingDetail;
    Marketing?: TsiWebAccountMarketingDetail;
    Service?: TsiWebAccountServiceDetail;
    PrimaryContact?: TsiWebPerson;
    PrimaryRep?: TsiWebPerson;
    PhoneNumbers?: Array<TsiWebPhoneNumber>;
    ShipTos?: Array<TsiWebShipTo>;
    BillTos?: Array<TsiWebBillTo>;
    PayMethods?: Array<TsiWebPayMethod>;
    ExternalProducts?: Array<TsiWebAccountExternalProduct>;
    Systems?: Array<TsiWebAccountSystem>;
    CoManagedTechnicians?: Array<TsiWebCoManagedTechnician>;
    Groups?: Array<TsiWebAssignedMarketingGroup>;
    Profiles?: Array<TsiWebAssignedMarketingProfile>;
    SICCodes?: Array<TsiWebAssignedSICCode>;
    CustomFields?: Array<TsiWebCustomField>;
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
