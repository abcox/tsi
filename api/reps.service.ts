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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { TsiWebRepDetail } from '../model/tsiWebRepDetail';
import { TsiWebRepSummary } from '../model/tsiWebRepSummary';
import { TsiWebTasksResponse } from '../model/tsiWebTasksResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RepsService {

    protected basePath = 'http://api2.tigerpawsoftware.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Gets the Rep completed tasks.
     * If you are retrieving a private task and if you are not the owner, only the following the fields are retrieved.  &lt;p&gt;  AccountNumber, AccountName, ScheduledForRepNumber, ScheduledForRepName, StartDate, StartTime, WholeStartDateTime, EndDate, EndTime, WholeEnddateTime, IsPrivate  &lt;/p&gt;
     * @param repNumber The Rep number.
     * @param repModelScheduledFor 
     * @param repModelScheduledBy 
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public repsGetRepCompletedTasks(repNumber: number, repModelScheduledFor?: boolean, repModelScheduledBy?: boolean, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebTasksResponse>;
    public repsGetRepCompletedTasks(repNumber: number, repModelScheduledFor?: boolean, repModelScheduledBy?: boolean, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebTasksResponse>>;
    public repsGetRepCompletedTasks(repNumber: number, repModelScheduledFor?: boolean, repModelScheduledBy?: boolean, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebTasksResponse>>;
    public repsGetRepCompletedTasks(repNumber: number, repModelScheduledFor?: boolean, repModelScheduledBy?: boolean, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (repNumber === null || repNumber === undefined) {
            throw new Error('Required parameter repNumber was null or undefined when calling repsGetRepCompletedTasks.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (repModelScheduledFor !== undefined) {
            queryParameters = queryParameters.set('repModel.scheduledFor', <any>repModelScheduledFor);
        }
        if (repModelScheduledBy !== undefined) {
            queryParameters = queryParameters.set('repModel.scheduledBy', <any>repModelScheduledBy);
        }
        if (pageRequestPageSize !== undefined) {
            queryParameters = queryParameters.set('pageRequest.pageSize', <any>pageRequestPageSize);
        }
        if (pageRequestStartRow !== undefined) {
            queryParameters = queryParameters.set('pageRequest.startRow', <any>pageRequestStartRow);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<TsiWebTasksResponse>(`${this.basePath}/api/reps/${encodeURIComponent(String(repNumber))}/tasks/completed`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the Rep detail.
     * 
     * @param repNumber The Rep number.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public repsGetRepDetail(repNumber: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebRepDetail>;
    public repsGetRepDetail(repNumber: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebRepDetail>>;
    public repsGetRepDetail(repNumber: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebRepDetail>>;
    public repsGetRepDetail(repNumber: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (repNumber === null || repNumber === undefined) {
            throw new Error('Required parameter repNumber was null or undefined when calling repsGetRepDetail.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<TsiWebRepDetail>(`${this.basePath}/api/reps/${encodeURIComponent(String(repNumber))}/details`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the Rep incomplete tasks.
     * If you are retrieving a private task and if you are not the owner, only the following the fields are retrieved.  &lt;p&gt;  AccountNumber, AccountName, ScheduledForRepNumber, ScheduledForRepName, StartDate, StartTime, WholeStartDateTime, EndDate, EndTime, WholeEnddateTime, IsPrivate  &lt;/p&gt;
     * @param repNumber The Rep number.
     * @param repModelScheduledFor 
     * @param repModelScheduledBy 
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public repsGetRepIncompleteTasks(repNumber: number, repModelScheduledFor?: boolean, repModelScheduledBy?: boolean, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebTasksResponse>;
    public repsGetRepIncompleteTasks(repNumber: number, repModelScheduledFor?: boolean, repModelScheduledBy?: boolean, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebTasksResponse>>;
    public repsGetRepIncompleteTasks(repNumber: number, repModelScheduledFor?: boolean, repModelScheduledBy?: boolean, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebTasksResponse>>;
    public repsGetRepIncompleteTasks(repNumber: number, repModelScheduledFor?: boolean, repModelScheduledBy?: boolean, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (repNumber === null || repNumber === undefined) {
            throw new Error('Required parameter repNumber was null or undefined when calling repsGetRepIncompleteTasks.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (repModelScheduledFor !== undefined) {
            queryParameters = queryParameters.set('repModel.scheduledFor', <any>repModelScheduledFor);
        }
        if (repModelScheduledBy !== undefined) {
            queryParameters = queryParameters.set('repModel.scheduledBy', <any>repModelScheduledBy);
        }
        if (pageRequestPageSize !== undefined) {
            queryParameters = queryParameters.set('pageRequest.pageSize', <any>pageRequestPageSize);
        }
        if (pageRequestStartRow !== undefined) {
            queryParameters = queryParameters.set('pageRequest.startRow', <any>pageRequestStartRow);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<TsiWebTasksResponse>(`${this.basePath}/api/reps/${encodeURIComponent(String(repNumber))}/tasks`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the Rep summary.
     * 
     * @param repNumber The Rep number.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public repsGetRepSummary(repNumber: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebRepSummary>;
    public repsGetRepSummary(repNumber: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebRepSummary>>;
    public repsGetRepSummary(repNumber: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebRepSummary>>;
    public repsGetRepSummary(repNumber: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (repNumber === null || repNumber === undefined) {
            throw new Error('Required parameter repNumber was null or undefined when calling repsGetRepSummary.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<TsiWebRepSummary>(`${this.basePath}/api/reps/${encodeURIComponent(String(repNumber))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the Rep tasks. Includes both completed and incomplete tasks.
     * If you are retrieving a private task and if you are not the owner, only the following the fields are retrieved.  &lt;p&gt;  AccountNumber, AccountName, ScheduledForRepNumber, ScheduledForRepName, StartDate, StartTime, WholeStartDateTime, EndDate, EndTime, WholeEnddateTime, IsPrivate  &lt;/p&gt;
     * @param repNumber The Rep number.
     * @param repModelScheduledFor 
     * @param repModelScheduledBy 
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public repsGetRepTasks(repNumber: number, repModelScheduledFor?: boolean, repModelScheduledBy?: boolean, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebTasksResponse>;
    public repsGetRepTasks(repNumber: number, repModelScheduledFor?: boolean, repModelScheduledBy?: boolean, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebTasksResponse>>;
    public repsGetRepTasks(repNumber: number, repModelScheduledFor?: boolean, repModelScheduledBy?: boolean, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebTasksResponse>>;
    public repsGetRepTasks(repNumber: number, repModelScheduledFor?: boolean, repModelScheduledBy?: boolean, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (repNumber === null || repNumber === undefined) {
            throw new Error('Required parameter repNumber was null or undefined when calling repsGetRepTasks.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (repModelScheduledFor !== undefined) {
            queryParameters = queryParameters.set('repModel.scheduledFor', <any>repModelScheduledFor);
        }
        if (repModelScheduledBy !== undefined) {
            queryParameters = queryParameters.set('repModel.scheduledBy', <any>repModelScheduledBy);
        }
        if (pageRequestPageSize !== undefined) {
            queryParameters = queryParameters.set('pageRequest.pageSize', <any>pageRequestPageSize);
        }
        if (pageRequestStartRow !== undefined) {
            queryParameters = queryParameters.set('pageRequest.startRow', <any>pageRequestStartRow);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<TsiWebTasksResponse>(`${this.basePath}/api/reps/${encodeURIComponent(String(repNumber))}/tasks/all`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}