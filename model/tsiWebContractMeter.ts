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


export interface TsiWebContractMeter {
    /**
     * Gets or sets the contract multiple meter usage key number
     */
    ContractMultipleMeterUsageKeyNumber?: number;
    /**
     * Gets or sets the Contract detail key number
     */
    ContractDetailKeyNumber?: number;
    /**
     * Gets or sets the contract Meter key number
     */
    ContractMeterKeyNumber?: number;
    /**
     * Gets or sets the contract meter name
     */
    ContractMeterName?: string;
    /**
     * Gets or sets the contract meter group
     */
    ContractMeterGroupKeyNumber?: number;
    /**
     * Gets or sets the contract meter group name
     */
    ContractMeterGroupName?: string;
    /**
     * Gets or sets the StartDate
     */
    StartDate?: Date;
    /**
     * Gets or sets the StartingMeterReading
     */
    StartingMeterReading?: number;
    /**
     * Gets or sets the CurrentMeterReading
     */
    CurrentMeterReading?: number;
    /**
     * Gets or sets the CurrentMeterUsage
     */
    CurrentMeterUsage?: number;
    /**
     * Gets or sets the DateRead
     */
    DateRead?: Date;
    /**
     * Gets or sets the LastReading
     */
    LastReading?: number;
    /**
     * Gets or sets the LastUsage
     */
    LastUsage?: number;
    /**
     * Gets or sets the LastDateRead
     */
    LastDateRead?: Date;
    /**
     * Gets or sets the EndDate
     */
    EndDate?: Date;
    /**
     * Gets or sets the LastBilledDate
     */
    LastBilledDate?: Date;
    /**
     * Gets or sets the TotalUsage
     */
    TotalUsage?: number;
    /**
     * Gets or sets the TotalUsage
     */
    Inactive?: boolean;
}
