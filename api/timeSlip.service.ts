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

import { TsiWebAdvancedSearchRequest } from '../model/tsiWebAdvancedSearchRequest';
import { TsiWebCreateTimeSlipModel } from '../model/tsiWebCreateTimeSlipModel';
import { TsiWebDateTimeSearchModel } from '../model/tsiWebDateTimeSearchModel';
import { TsiWebSearchTimeSlipResponse } from '../model/tsiWebSearchTimeSlipResponse';
import { TsiWebTimeSlipResponse } from '../model/tsiWebTimeSlipResponse';
import { TsiWebTimeSlipSummary } from '../model/tsiWebTimeSlipSummary';
import { TsiWebUpdateTimeSlipModel } from '../model/tsiWebUpdateTimeSlipModel';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TimeSlipService {

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
     * Advanced search for TimeSlip.
     * 
     * @param request An AdvancedSearchRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timeSlipAdvancedSearch(request: TsiWebAdvancedSearchRequest, observe?: 'body', reportProgress?: boolean): Observable<TsiWebSearchTimeSlipResponse>;
    public timeSlipAdvancedSearch(request: TsiWebAdvancedSearchRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebSearchTimeSlipResponse>>;
    public timeSlipAdvancedSearch(request: TsiWebAdvancedSearchRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebSearchTimeSlipResponse>>;
    public timeSlipAdvancedSearch(request: TsiWebAdvancedSearchRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling timeSlipAdvancedSearch.');
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
            'application/x-www-form-urlencoded',
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<TsiWebSearchTimeSlipResponse>(`${this.basePath}/api/timeslips/search`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates a time slip.
     * Billing options for time slips are Business and personal only.
     * @param model The time slip model.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timeSlipCreateTimeSlip(model: TsiWebCreateTimeSlipModel, observe?: 'body', reportProgress?: boolean): Observable<TsiWebTimeSlipResponse>;
    public timeSlipCreateTimeSlip(model: TsiWebCreateTimeSlipModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebTimeSlipResponse>>;
    public timeSlipCreateTimeSlip(model: TsiWebCreateTimeSlipModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebTimeSlipResponse>>;
    public timeSlipCreateTimeSlip(model: TsiWebCreateTimeSlipModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling timeSlipCreateTimeSlip.');
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
            'application/x-www-form-urlencoded',
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<TsiWebTimeSlipResponse>(`${this.basePath}/api/timeslips`,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the time slip by time slip number.
     * 
     * @param timeSlipNumber The time slip identifier.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timeSlipGetTimeSlip(timeSlipNumber: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebTimeSlipSummary>;
    public timeSlipGetTimeSlip(timeSlipNumber: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebTimeSlipSummary>>;
    public timeSlipGetTimeSlip(timeSlipNumber: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebTimeSlipSummary>>;
    public timeSlipGetTimeSlip(timeSlipNumber: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (timeSlipNumber === null || timeSlipNumber === undefined) {
            throw new Error('Required parameter timeSlipNumber was null or undefined when calling timeSlipGetTimeSlip.');
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

        return this.httpClient.get<TsiWebTimeSlipSummary>(`${this.basePath}/api/timeslips/${encodeURIComponent(String(timeSlipNumber))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Search time slip by time slip End Date.
     * 
     * @param model A {Tsi.Web.DateTimeSearchModel}
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timeSlipSearchByEndDate(model: TsiWebDateTimeSearchModel, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebSearchTimeSlipResponse>;
    public timeSlipSearchByEndDate(model: TsiWebDateTimeSearchModel, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebSearchTimeSlipResponse>>;
    public timeSlipSearchByEndDate(model: TsiWebDateTimeSearchModel, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebSearchTimeSlipResponse>>;
    public timeSlipSearchByEndDate(model: TsiWebDateTimeSearchModel, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling timeSlipSearchByEndDate.');
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
            'application/x-www-form-urlencoded',
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<TsiWebSearchTimeSlipResponse>(`${this.basePath}/api/timeslips/search/enddate`,
            model,
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
     * Search time slip by time slip log reason.
     * 
     * @param criteria A JSON or XML string containing the criteria.
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timeSlipSearchByLogReason(criteria: string, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebSearchTimeSlipResponse>;
    public timeSlipSearchByLogReason(criteria: string, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebSearchTimeSlipResponse>>;
    public timeSlipSearchByLogReason(criteria: string, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebSearchTimeSlipResponse>>;
    public timeSlipSearchByLogReason(criteria: string, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (criteria === null || criteria === undefined) {
            throw new Error('Required parameter criteria was null or undefined when calling timeSlipSearchByLogReason.');
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
            'application/x-www-form-urlencoded',
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<TsiWebSearchTimeSlipResponse>(`${this.basePath}/api/timeslips/search/logreason`,
            criteria,
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
     * Search time slip by time slip Start Date.
     * 
     * @param model A {Tsi.Web.DateTimeSearchModel}
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timeSlipSearchByStartDate(model: TsiWebDateTimeSearchModel, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebSearchTimeSlipResponse>;
    public timeSlipSearchByStartDate(model: TsiWebDateTimeSearchModel, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebSearchTimeSlipResponse>>;
    public timeSlipSearchByStartDate(model: TsiWebDateTimeSearchModel, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebSearchTimeSlipResponse>>;
    public timeSlipSearchByStartDate(model: TsiWebDateTimeSearchModel, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling timeSlipSearchByStartDate.');
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
            'application/x-www-form-urlencoded',
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<TsiWebSearchTimeSlipResponse>(`${this.basePath}/api/timeslips/search/startdate`,
            model,
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
     * Search time slip by time slip tech assigned.
     * 
     * @param criteria A JSON or XML string containing the criteria.
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timeSlipSearchByTechAssigned(criteria: string, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebSearchTimeSlipResponse>;
    public timeSlipSearchByTechAssigned(criteria: string, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebSearchTimeSlipResponse>>;
    public timeSlipSearchByTechAssigned(criteria: string, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebSearchTimeSlipResponse>>;
    public timeSlipSearchByTechAssigned(criteria: string, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (criteria === null || criteria === undefined) {
            throw new Error('Required parameter criteria was null or undefined when calling timeSlipSearchByTechAssigned.');
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
            'application/x-www-form-urlencoded',
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<TsiWebSearchTimeSlipResponse>(`${this.basePath}/api/timeslips/search/techassigned`,
            criteria,
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
     * Search time slip by time slip number.
     * 
     * @param criteria A JSON or XML string containing the criteria.
     * @param pageRequestPageSize 
     * @param pageRequestStartRow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timeSlipSearchByTimeSlipNumber(criteria: string, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'body', reportProgress?: boolean): Observable<TsiWebSearchTimeSlipResponse>;
    public timeSlipSearchByTimeSlipNumber(criteria: string, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebSearchTimeSlipResponse>>;
    public timeSlipSearchByTimeSlipNumber(criteria: string, pageRequestPageSize?: number, pageRequestStartRow?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebSearchTimeSlipResponse>>;
    public timeSlipSearchByTimeSlipNumber(criteria: string, pageRequestPageSize?: number, pageRequestStartRow?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (criteria === null || criteria === undefined) {
            throw new Error('Required parameter criteria was null or undefined when calling timeSlipSearchByTimeSlipNumber.');
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
            'application/x-www-form-urlencoded',
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<TsiWebSearchTimeSlipResponse>(`${this.basePath}/api/timeslips/search/timeslipnumber`,
            criteria,
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
     * Updates a time slip.
     * Billing options for time slips are Business and personal only.   &lt;p&gt;Valid values for acceptance statuses are \&quot;None\&quot;, Accepted\&quot;, \&quot;Questioned\&quot; And \&quot;Resubmitted\&quot;&lt;/p&gt;
     * @param timeSlipNumber 
     * @param model The time slip model.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timeSlipUpdateTimeSlip(timeSlipNumber: number, model: TsiWebUpdateTimeSlipModel, observe?: 'body', reportProgress?: boolean): Observable<TsiWebTimeSlipResponse>;
    public timeSlipUpdateTimeSlip(timeSlipNumber: number, model: TsiWebUpdateTimeSlipModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TsiWebTimeSlipResponse>>;
    public timeSlipUpdateTimeSlip(timeSlipNumber: number, model: TsiWebUpdateTimeSlipModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TsiWebTimeSlipResponse>>;
    public timeSlipUpdateTimeSlip(timeSlipNumber: number, model: TsiWebUpdateTimeSlipModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (timeSlipNumber === null || timeSlipNumber === undefined) {
            throw new Error('Required parameter timeSlipNumber was null or undefined when calling timeSlipUpdateTimeSlip.');
        }
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling timeSlipUpdateTimeSlip.');
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
            'application/x-www-form-urlencoded',
            'application/json',
            'application/xml',
            'text/xml'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<TsiWebTimeSlipResponse>(`${this.basePath}/api/timeslips/${encodeURIComponent(String(timeSlipNumber))}`,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
