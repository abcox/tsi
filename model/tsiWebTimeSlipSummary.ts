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
import { TsiWebPerson } from './tsiWebPerson';
import { TsiWebTimeSlip } from './tsiWebTimeSlip';


export interface TsiWebTimeSlipSummary {
    timeSlip?: TsiWebTimeSlip;
    techAssignedRep?: TsiWebPerson;
    acceptedOrRejectedByRep?: TsiWebPerson;
}
