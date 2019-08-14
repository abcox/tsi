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


export interface TsiWebRecurringServiceOrderSchedule {
    recurringServiceOrderScheduleId?: number;
    recurringScheduleName?: string;
    templateId?: number;
    templateName?: string;
    accountNumber?: number;
    startDate?: Date;
    takenByRepNumber?: number;
    createAheadDays?: number;
    serviceOrderReceivedTime?: Date;
    endByDate?: Date;
    numberOfOccurences?: number;
    frequency?: string;
    dailyInterval?: number;
    scheduleEveryWeekday?: boolean;
    weeklyInterval?: number;
    weeklyOnSunday?: boolean;
    weeklyOnMonday?: boolean;
    weeklyOnTuesday?: boolean;
    weeklyOnWednesday?: boolean;
    weeklyOnThursday?: boolean;
    weeklyOnFriday?: boolean;
    weeklyOnSaturday?: boolean;
    monthlyInterval?: number;
    dayOfMonth?: number;
    weekOfMonth?: string;
    dayOfWeek?: string;
    yearlyInterval?: number;
    monthOfYear?: number;
    numberOfServiceOrdersCreated?: number;
    dateOfLastServiceOrderCreated?: Date;
    firstServiceOrderNumber?: number;
    sequenceCompleted?: boolean;
}