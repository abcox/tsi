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
import { TsiWebAlternateAddress } from './tsiWebAlternateAddress';


export interface TsiWebWorkOrder {
    workOrderNumber?: number;
    workOrderClosed?: boolean;
    workOrderDate?: Date;
    workOrderStatus?: string;
    stagingLocation?: string;
    stagingBin?: string;
    quoteNumber?: number;
    accountNumber?: number;
    projectNumber?: number;
    projectPhaseNumber?: number;
    billTo?: TsiWebAlternateAddress;
    billingComment?: string;
    payMethodId?: number;
    terms?: string;
    paymentMethod?: string;
    invoiceNumber?: number;
    invoiceDate?: Date;
    shipTo?: TsiWebAlternateAddress;
    packingInstruction?: string;
    shipper?: string;
    shippingMethod?: string;
    shipperPhoneNumber?: string;
    trackingNumber?: string;
    shipDate?: Date;
    shippingInstruction?: string;
    internalComment?: string;
    comment?: string;
    numberOfPurchaseOrders?: number;
}
