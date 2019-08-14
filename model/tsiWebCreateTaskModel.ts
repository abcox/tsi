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
import { TsiWebTaskAttendee } from './tsiWebTaskAttendee';


export interface TsiWebCreateTaskModel {
    scheduleConflictedTask?: boolean;
    scheduleThroughEndDate?: boolean;
    numberOfTasksToSchedule?: number;
    taskAttendees?: Array<TsiWebTaskAttendee>;
    comment?: string;
    accountNumber?: number;
    contactNumber?: number;
    scheduledForRepNumber?: number;
    scheduledByRepNumber?: number;
    serviceOrderNumber?: number;
    quoteNumber?: number;
    opportunityNumber?: number;
    projectNumber?: number;
    projectPhaseNumber?: number;
    projectSubPhaseAssignmentNumber?: number;
    startDate?: Date;
    startTime?: Date;
    endDate?: Date;
    endTime?: Date;
    action?: string;
    type?: string;
    priorityNumber?: number;
    priority?: string;
    hasAlarm?: boolean;
    alarmDateTime?: Date;
    alarmReminderQuantity?: number;
    alarmReminderInterval?: string;
    isCompleted?: boolean;
    isPrivate?: boolean;
    lastModified?: Date;
    resourceName?: string;
    isGlobalTask?: boolean;
    isAppointment?: boolean;
    subject?: string;
    location?: string;
    dueDate?: Date;
    dueTime?: Date;
}