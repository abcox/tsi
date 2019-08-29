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


export interface TsiWebAccountManagedAsset {
    /**
     * Gets or sets AssetId
     */
    ManagedAssetNumber?: number;
    /**
     * Gets or sets the account number
     */
    AccountNumber?: number;
    /**
     * Gets or sets Provider
     */
    Provider?: string;
    /**
     * Gets or sets AssetType
     */
    AssetType?: string;
    /**
     * Gets or sets ProviderAssetName
     */
    ProviderAssetName?: string;
    /**
     * Gets or sets ProviderAssetId
     */
    ProviderAssetId?: string;
    /**
     * Gets or sets the Price
     */
    Price?: number;
    /**
     * Gets or sets the PriceLevel
     */
    PriceLevel?: number;
    /**
     * Gets or sets the PriceLevelDescription
     */
    PriceLevelDescription?: string;
    /**
     * Gets or sets the ExternalId
     */
    ExternalId?: string;
    /**
     * Gets or sets the DateAdded
     */
    DateAdded?: Date;
    /**
     * Gets or sets the DeviceURL
     */
    DeviceURL?: string;
    /**
     * Gets or sets the LastPolledDate
     */
    LastPolledDate?: Date;
    /**
     * Gets or sets the DateRemoved
     */
    DateRemoved?: Date;
    /**
     * Gets or sets the IPAdress
     */
    IPAddress?: string;
    /**
     * Gets or sets the MacAddress
     */
    MACAddress?: string;
    /**
     * Gets or sets the OS
     */
    OS?: string;
    /**
     * Gets or sets the SerialNumber
     */
    SerialNumber?: string;
    /**
     * Gets or sets the Description
     */
    Description?: string;
    /**
     * Gets or sets the last ogged-in user
     */
    LastLoggedInUser?: string;
    /**
     * Gets or sets the CPU
     */
    CPU?: string;
    /**
     * Gets or sets the Memory
     */
    Memory?: string;
    /**
     * Gets or sets the Hard drive space
     */
    HardDriveSpace?: string;
    /**
     * Gets or sets UseFlatPrice
     */
    UseFlatPrice?: boolean;
}
