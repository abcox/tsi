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
import { TsiWebAssignedMarketingGroup } from './tsiWebAssignedMarketingGroup';
import { TsiWebAssignedMarketingProfile } from './tsiWebAssignedMarketingProfile';
import { TsiWebContact } from './tsiWebContact';
import { TsiWebCustomField } from './tsiWebCustomField';
import { TsiWebEmailAddress } from './tsiWebEmailAddress';
import { TsiWebPhoneNumber } from './tsiWebPhoneNumber';


export interface TsiWebContactDetail {
    ContactNumber?: number;
    Contact?: TsiWebContact;
    PhoneNumbers?: Array<TsiWebPhoneNumber>;
    EmailAddresses?: Array<TsiWebEmailAddress>;
    Groups?: Array<TsiWebAssignedMarketingGroup>;
    Profiles?: Array<TsiWebAssignedMarketingProfile>;
    Account?: TsiWebAccount;
    CustomFields?: Array<TsiWebCustomField>;
    IsPrimaryContact?: boolean;
    JournalEntries?: number;
    OpenOpportunities?: number;
    OpenServiceOrders?: number;
    PastDueTasks?: number;
}
