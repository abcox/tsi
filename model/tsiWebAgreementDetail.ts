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
import { TsiWebAgreement } from './tsiWebAgreement';
import { TsiWebAgreementAdditionalCharge } from './tsiWebAgreementAdditionalCharge';
import { TsiWebAgreementCoveredAssetType } from './tsiWebAgreementCoveredAssetType';
import { TsiWebAgreementCustomerAsset } from './tsiWebAgreementCustomerAsset';


export interface TsiWebAgreementDetail {
    /**
     * Gets or sets the AgreementNumber
     */
    agreementNumber?: number;
    /**
     * Gets or sets the AccountSummary
     */
    account?: TsiWebAccount;
    /**
     * Gets or sets the Account Primary phone
     */
    primaryPhone?: string;
    /**
     * Gets or sets the  Account Primary fax
     */
    primaryFax?: string;
    /**
     * Gets or sets the AgreementSummary
     */
    agreement?: TsiWebAgreement;
    /**
     * Gets or sets the  Additional charges
     */
    additionalCharges?: Array<TsiWebAgreementAdditionalCharge>;
    /**
     * Gets or sets the CoveredAssetTypes
     */
    coveredAssetTypes?: Array<TsiWebAgreementCoveredAssetType>;
    /**
     * Gets or sets the  CustomerAssetTypes
     */
    customerAssetTypes?: Array<TsiWebAgreementCustomerAsset>;
    /**
     * Gets or sets the InternalComments
     */
    internalComments?: string;
    /**
     * Gets or sets the count Invoices
     */
    invoices?: number;
}