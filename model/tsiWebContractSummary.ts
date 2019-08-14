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
import { TsiWebContract } from './tsiWebContract';
import { TsiWebContractAccount } from './tsiWebContractAccount';


export interface TsiWebContractSummary {
    /**
     * Gets or sets the ContractNumber
     */
    contractNumber?: number;
    /**
     * Gets or sets the Contract
     */
    contract?: TsiWebContract;
    /**
     * Gets or sets the created by rep name
     */
    createdByRepName?: string;
    /**
     * Gets or sets the created by rep email address
     */
    createdByRepEmailAddress?: string;
    /**
     * Gets or sets the created by rep phone number
     */
    createdByRepPhoneNumber?: string;
    /**
     * Gets or sets the assigned tech rep name
     */
    assignedTechRepName?: string;
    /**
     * Gets or sets the assigned tech rep email adress
     */
    assignedTechRepEmailAddress?: string;
    /**
     * Gets or sets the assigned tech rep phone number
     */
    assignedTechRepPhoneNumber?: string;
    /**
     * Gets or sets the rep to credit rep name
     */
    repToCreditName?: string;
    /**
     * Gets or sets the rep to credit rep email address
     */
    repToCreditEmailAddress?: string;
    /**
     * Gets or sets the rep to credit rep phone number
     */
    repToCreditPhoneNumber?: string;
    /**
     * Gets or sets the ContractAccount
     */
    contractAccount?: Array<TsiWebContractAccount>;
    /**
     * Gets or sets the ItemsCovered
     */
    itemsCovered?: number;
}
