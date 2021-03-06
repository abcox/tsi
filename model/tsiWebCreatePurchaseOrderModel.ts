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
import { SystemNullableTsiWebOptionalDateTime } from './systemNullableTsiWebOptionalDateTime';
import { TsiWebAlternateAddress } from './tsiWebAlternateAddress';
import { TsiWebPuchaseOrderVendorItem } from './tsiWebPuchaseOrderVendorItem';


export interface TsiWebCreatePurchaseOrderModel {
    VendorItem?: TsiWebPuchaseOrderVendorItem;
    /**
     * Base, Average, Latest, OrderDetailEstimatedCost
     */
    AssemblyCostToUseType?: string;
    DefaultReceivingBin?: string;
    Description?: string;
    Reference?: string;
    PurchaseOrderDate?: SystemNullableTsiWebOptionalDateTime;
    ConfirmedBy?: string;
    ConfirmedDate?: SystemNullableTsiWebOptionalDateTime;
    BuyingRepNumber?: number;
    Comments?: string;
    OrderTerms?: string;
    FreightTerms?: string;
    ShippingMethod?: string;
    UpdateLatestCost?: boolean;
    AllowBackOrders?: boolean;
    ExpectedDate?: SystemNullableTsiWebOptionalDateTime;
    DefaultReceivingLocation?: string;
    InvoiceTerms?: string;
    Freight?: number;
    BlindShip?: boolean;
    OrderIdentificationNumber?: string;
    TrackingNumber?: string;
    RequestedRepNumber?: number;
    LinkAccountNumber?: number;
    LinkQuoteNumber?: number;
    LinkServiceOrderNumber?: number;
    PaidInFull?: boolean;
    InternalComments?: string;
    Shipper?: string;
    ShipToAddressType?: string;
    ShipToAddressAccountNumber?: number;
    AlternateShipToAddressID?: number;
    ShipTo?: TsiWebAlternateAddress;
    BillToAddressType?: string;
    BillToAddressAccountNumber?: number;
    AlternateBillToAddressID?: number;
    BillTo?: TsiWebAlternateAddress;
    UseVendorCostInPriceBook?: boolean;
}
