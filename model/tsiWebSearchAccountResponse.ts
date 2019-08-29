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
import { TsiWebAccountSummary } from './tsiWebAccountSummary';


export interface TsiWebSearchAccountResponse {
    Accounts?: Array<TsiWebAccountSummary>;
    PageSize?: number;
    NextRow?: number;
    TotalCount?: number;
    Success?: boolean;
    Message?: string;
}
