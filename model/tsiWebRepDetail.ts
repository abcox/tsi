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
import { TsiWebAddress } from './tsiWebAddress';
import { TsiWebRepPreferences } from './tsiWebRepPreferences';


export interface TsiWebRepDetail {
    RepNumber?: number;
    PersonalAccountNumber?: number;
    Address?: TsiWebAddress;
    HomePhone?: string;
    MobilePhone?: string;
    Status?: string;
    Inactive?: boolean;
    RepPreferences?: TsiWebRepPreferences;
    FirstName?: string;
    LastName?: string;
    PhoneNumber?: string;
    EmailAddress?: string;
    Title?: string;
    DisplayName?: string;
    SearchName?: string;
}
