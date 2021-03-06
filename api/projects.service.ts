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

import { TsiWebTasksResponse } from '../model/tsiWebTasksResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProjectsService {

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
     * Gets the phase completed tasks.
     * 
     * @param phaseNumber The phase number.
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public projectsGetPhaseCompletedTasks(phaseNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebTasksResponse>;
    public projectsGetPhaseCompletedTasks(phaseNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebTasksResponse>>;
    public projectsGetPhaseCompletedTasks(phaseNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebTasksResponse>>;
    public projectsGetPhaseCompletedTasks(phaseNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (phaseNumber === null || phaseNumber === undefined) {
            throw new Error('Required parameter phaseNumber was null or undefined when calling projectsGetPhaseCompletedTasks.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
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

        return this.httpClient.get<TsiWebTasksResponse>(`${this.basePath}/api/projects/phases/${encodeURIComponent(String(phaseNumber))}/tasks/completed`,
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
     * Gets the phase incomplete tasks.
     * 
     * @param phaseNumber The phase number.
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public projectsGetPhaseIncompleteTasks(phaseNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebTasksResponse>;
    public projectsGetPhaseIncompleteTasks(phaseNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebTasksResponse>>;
    public projectsGetPhaseIncompleteTasks(phaseNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebTasksResponse>>;
    public projectsGetPhaseIncompleteTasks(phaseNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (phaseNumber === null || phaseNumber === undefined) {
            throw new Error('Required parameter phaseNumber was null or undefined when calling projectsGetPhaseIncompleteTasks.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
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

        return this.httpClient.get<TsiWebTasksResponse>(`${this.basePath}/api/projects/phases/${encodeURIComponent(String(phaseNumber))}/tasks`,
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
     * Gets the phase tasks. Includes both completed and incomplete tasks.
     * 
     * @param phaseNumber The phase number.
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public projectsGetPhaseTasks(phaseNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebTasksResponse>;
    public projectsGetPhaseTasks(phaseNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebTasksResponse>>;
    public projectsGetPhaseTasks(phaseNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebTasksResponse>>;
    public projectsGetPhaseTasks(phaseNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (phaseNumber === null || phaseNumber === undefined) {
            throw new Error('Required parameter phaseNumber was null or undefined when calling projectsGetPhaseTasks.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
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

        return this.httpClient.get<TsiWebTasksResponse>(`${this.basePath}/api/projects/phases/${encodeURIComponent(String(phaseNumber))}/tasks/all`,
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
     * Gets the Project completed tasks.
     * If you are retrieving a private task and if you are not the owner, only the following the fields are retrieved.  &lt;p&gt;  AccountNumber, AccountName, ScheduledForRepNumber, ScheduledForRepName, StartDate, StartTime, WholeStartDateTime, EndDate, EndTime, WholeEnddateTime, IsPrivate  &lt;/p&gt;
     * @param projectNumber The Project number.
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public projectsGetProjectCompletedTasks(projectNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebTasksResponse>;
    public projectsGetProjectCompletedTasks(projectNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebTasksResponse>>;
    public projectsGetProjectCompletedTasks(projectNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebTasksResponse>>;
    public projectsGetProjectCompletedTasks(projectNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (projectNumber === null || projectNumber === undefined) {
            throw new Error('Required parameter projectNumber was null or undefined when calling projectsGetProjectCompletedTasks.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
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

        return this.httpClient.get<TsiWebTasksResponse>(`${this.basePath}/api/projects/${encodeURIComponent(String(projectNumber))}/tasks/completed`,
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
     * Gets the Project incomplete tasks.
     * If you are retrieving a private task and if you are not the owner, only the following the fields are retrieved.  &lt;p&gt;  AccountNumber, AccountName, ScheduledForRepNumber, ScheduledForRepName, StartDate, StartTime, WholeStartDateTime, EndDate, EndTime, WholeEnddateTime, IsPrivate  &lt;/p&gt;
     * @param projectNumber The Project number.
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public projectsGetProjectIncompleteTasks(projectNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebTasksResponse>;
    public projectsGetProjectIncompleteTasks(projectNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebTasksResponse>>;
    public projectsGetProjectIncompleteTasks(projectNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebTasksResponse>>;
    public projectsGetProjectIncompleteTasks(projectNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (projectNumber === null || projectNumber === undefined) {
            throw new Error('Required parameter projectNumber was null or undefined when calling projectsGetProjectIncompleteTasks.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
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

        return this.httpClient.get<TsiWebTasksResponse>(`${this.basePath}/api/projects/${encodeURIComponent(String(projectNumber))}/tasks`,
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
     * Gets the Project tasks. Includes both completed and incomplete tasks.
     * If you are retrieving a private task and if you are not the owner, only the following the fields are retrieved.  &lt;p&gt;  AccountNumber, AccountName, ScheduledForRepNumber, ScheduledForRepName, StartDate, StartTime, WholeStartDateTime, EndDate, EndTime, WholeEnddateTime, IsPrivate  &lt;/p&gt;
     * @param projectNumber The Project number.
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public projectsGetProjectTasks(projectNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebTasksResponse>;
    public projectsGetProjectTasks(projectNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebTasksResponse>>;
    public projectsGetProjectTasks(projectNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebTasksResponse>>;
    public projectsGetProjectTasks(projectNumber: number, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (projectNumber === null || projectNumber === undefined) {
            throw new Error('Required parameter projectNumber was null or undefined when calling projectsGetProjectTasks.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
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

        return this.httpClient.get<TsiWebTasksResponse>(`${this.basePath}/api/projects/${encodeURIComponent(String(projectNumber))}/tasks/all`,
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
