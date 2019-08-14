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
import { TsiWebPurchaseOrderAssemblyDetail } from './tsiWebPurchaseOrderAssemblyDetail';


export interface TsiWebPurchaseOrderLineItem {
    purchaseOrderLineItemNumber?: number;
    lineNumber?: number;
    itemID?: string;
    itemDescription?: string;
    partNumber?: string;
    vendorItemNumber?: string;
    unitOfMeasure?: string;
    receivingLocation?: string;
    quantityOrdered?: number;
    projectedCost?: number;
    totalProjectedCost?: number;
    isRepair?: boolean;
    unitOfValue?: number;
    receivedCost?: number;
    quantityCancelled?: number;
    stock?: boolean;
    distributionFlag?: boolean;
    comment?: string;
    cancelledComment?: string;
    expectedDate?: Date;
    gLCode?: string;
    caseItemID?: string;
    caseItemDescription?: string;
    caseUnitOfMeasure?: string;
    displayQuantityOrdered?: number;
    caseUnitCost?: number;
    isCaseOrder?: boolean;
    updateBaseCostAndSellPrices?: boolean;
    isClosedAssembly?: boolean;
    type?: string;
    updateVendorCost?: boolean;
    receivingBin?: string;
    serialNumbers?: number;
    lineItemReceipts?: number;
    assembly?: Array<TsiWebPurchaseOrderAssemblyDetail>;
}
