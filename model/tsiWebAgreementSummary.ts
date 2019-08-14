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
import { TsiWebAgreement } from './tsiWebAgreement';


export interface TsiWebAgreementSummary {
    /**
     * Gets or sets the AgreementNumber
     */
    agreementNumber?: number;
    /**
     * Gets or sets the  AccountName
     */
    accountName?: string;
    /**
     * Gets or sets the Account Primary phone
     */
    primaryPhone?: string;
    /**
     * Gets or sets the  Account Primary fax
     */
    primaryFax?: string;
    /**
     * Gets or sets the Agreement
     */
    agreement?: TsiWebAgreement;
    /**
     * Gets or sets the count of Additional charges
     */
    additionalCharges?: number;
    /**
     * Gets or sets the count CoveredAssetTypes
     */
    coveredAssetTypes?: number;
    /**
     * Gets or sets the count CustomerAssetTypes
     */
    customerAssetTypes?: number;
    /**
     * Gets or sets the InternalComments
     */
    internalComments?: string;
    /**
     * Gets or sets the count Invoices
     */
    invoices?: number;
}
