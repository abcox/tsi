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
import { TsiWebServiceOrderWebLink } from './tsiWebServiceOrderWebLink';


export interface TsiWebCreateManagedPrintServiceOrderModel {
    deviceId: string;
    allowInactiveContract?: boolean;
    allowFutureContract?: boolean;
    allowContractNoRemaining?: boolean;
    externalTicketId: string;
    briefDescription?: string;
    status?: string;
    serviceOrderType?: string;
    priority?: string;
    workRequested?: string;
    workPerformed?: string;
    internalComments?: string;
    contactNumber?: number;
    dispatchBoardNumber?: number;
    takenBy?: number;
    technicianAssigned?: number;
    note?: string;
    alertUrl?: string;
    webLinks?: Array<TsiWebServiceOrderWebLink>;
}