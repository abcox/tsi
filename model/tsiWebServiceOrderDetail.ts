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
import { TsiWebCustomField } from './tsiWebCustomField';
import { TsiWebPerson } from './tsiWebPerson';
import { TsiWebServiceOrder } from './tsiWebServiceOrder';
import { TsiWebServiceOrderAssignedTech } from './tsiWebServiceOrderAssignedTech';
import { TsiWebServiceOrderContract } from './tsiWebServiceOrderContract';
import { TsiWebServiceOrderLock } from './tsiWebServiceOrderLock';
import { TsiWebServiceOrderPriority } from './tsiWebServiceOrderPriority';
import { TsiWebServiceOrderResolution } from './tsiWebServiceOrderResolution';
import { TsiWebServiceOrderStatus } from './tsiWebServiceOrderStatus';
import { TsiWebServiceOrderSymptom } from './tsiWebServiceOrderSymptom';
import { TsiWebServiceOrderSystem } from './tsiWebServiceOrderSystem';


export interface TsiWebServiceOrderDetail {
    serviceOrderNumber?: number;
    serviceOrder?: TsiWebServiceOrder;
    contractInfo?: TsiWebServiceOrderContract;
    systemInfo?: TsiWebServiceOrderSystem;
    statusInfo?: TsiWebServiceOrderStatus;
    priorityInfo?: TsiWebServiceOrderPriority;
    account?: TsiWebAccount;
    phoneNumber?: string;
    faxNumber?: string;
    contact?: TsiWebPerson;
    primaryTechnicianName?: string;
    primaryTechnicianEmailAddress?: string;
    primaryTechnicianPhoneNumber?: string;
    takenByName?: string;
    priceLevelDescription?: string;
    payMethodName?: string;
    projectDescription?: string;
    projectPhase?: string;
    repToCreditName?: string;
    voidedByName?: string;
    externalProductName?: string;
    severityDescription?: string;
    technicians?: Array<TsiWebServiceOrderAssignedTech>;
    serviceOrderProfiles?: number;
    serviceOrderSymptoms?: Array<TsiWebServiceOrderSymptom>;
    serviceOrderResolution?: Array<TsiWebServiceOrderResolution>;
    customFields?: Array<TsiWebCustomField>;
    totalExpenses?: number;
    partsUsed?: number;
    itemsServiced?: number;
    timeLogs?: number;
    openTasks?: number;
    notes?: number;
    subContractors?: number;
    quotes?: number;
    changeOrders?: number;
    hasParentServiceOrders?: boolean;
    hasChildServiceOrders?: boolean;
    hasBeenSigned?: boolean;
    hasRecurringOrder?: boolean;
    serviceOrderLock?: TsiWebServiceOrderLock;
    hasProjectBeenInvoiced?: boolean;
}
