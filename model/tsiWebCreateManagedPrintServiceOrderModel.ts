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
    DeviceId: string;
    AllowInactiveContract?: boolean;
    AllowFutureContract?: boolean;
    AllowContractNoRemaining?: boolean;
    ExternalTicketId: string;
    BriefDescription?: string;
    Status?: string;
    ServiceOrderType?: string;
    Priority?: string;
    WorkRequested?: string;
    WorkPerformed?: string;
    InternalComments?: string;
    ContactNumber?: number;
    DispatchBoardNumber?: number;
    TakenBy?: number;
    TechnicianAssigned?: number;
    Note?: string;
    AlertUrl?: string;
    WebLinks?: Array<TsiWebServiceOrderWebLink>;
}
