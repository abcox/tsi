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


export interface TsiWebItemServiced {
    ItemsServicedNumber?: number;
    ServiceOrderNumber?: number;
    AccountNumber?: number;
    CustomerInventoryNumber?: number;
    CustomerInventoryAssemblyDetailNumber?: number;
    ContractNumber?: number;
    ContractDetailNumber?: number;
    RMA?: number;
    Quantity?: number;
    MeterReading?: number;
    MeterUsed?: number;
    RMADetail?: number;
    ProductType?: number;
    MSPAccountAssets?: number;
    ItemID?: string;
    ItemDescription?: string;
    RepairCode?: string;
    Location?: string;
    Problem?: string;
    Repair?: string;
    SerialNumber?: string;
    RMANumber?: string;
    Manufacturer?: string;
    ProvidersAssetId?: string;
    WarrantyCovered?: boolean;
    UpdateContract?: boolean;
    CompleteDate?: Date;
    Symptom1?: string;
    Symptom2?: string;
    Symptom3?: string;
    Symptom4?: string;
    Symptom5?: string;
    Resolution1?: string;
    Resolution2?: string;
    Resolution3?: string;
    Resolution4?: string;
    Resolution5?: string;
}
