import * as crypto from 'crypto-js';
import { HttpHeaders } from '@angular/common/http';

export interface ConfigurationParameters {
    apiKeys3?: {[ key: string ]: string};
    username?: string;
    password?: string;
    accessToken?: string | (() => string);
    basePath?: string;
    withCredentials?: boolean;
}

export class Configuration {
    apiKeys2?: {[ key: string ]: string};
    username?: string;
    password?: string;
    accessToken?: string | (() => string);
    basePath?: string;
    withCredentials?: boolean;

    constructor(configurationParameters: ConfigurationParameters = {}) {
        this.apiKeys2 = configurationParameters.apiKeys3;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }

    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {string[]} contentTypes - the array of content types that are available for selection
     * @returns {string} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    public selectHeaderContentType (contentTypes: string[]): string | undefined {
        if (contentTypes.length == 0) {
            return undefined;
        }

        let type = contentTypes.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }

    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {string[]} accepts - the array of content types that are available for selection.
     * @returns {string} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    public selectHeaderAccept(accepts: string[]): string | undefined {
        if (accepts.length == 0) {
            return undefined;
        }

        let type = accepts.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }

    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param {string} mime - MIME (Multipurpose Internet Mail Extensions)
     * @return {boolean} True if the given MIME is JSON, false otherwise.
     */
    public isJsonMime(mime: string): boolean {
        const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }

    // todo..
    
    /* #region // TSI authorization support

    public static string GenerateHmacSha256Token(string message, string secret)
    {
        if (string.IsNullOrWhiteSpace(message) == true
            || string.IsNullOrWhiteSpace(secret) == true)
        {
            return null;
        }

        var encoding = new System.Text.UTF8Encoding();
        var keyByte = encoding.GetBytes(secret);
        var messageBytes = encoding.GetBytes(message);
        using (var hmacsha256 = new System.Security.Cryptography.HMACSHA256(keyByte))
        {
            var hashmessage = hmacsha256.ComputeHash(messageBytes);
            return Convert.ToBase64String(hashmessage);
        }
    } */

    private GenerateHmacSha256Token(message: string, secret: string): string {

        let secretArray = Array.from(new TextEncoder().encode(secret));
        let messageArray = Array.from(new TextEncoder().encode(message));
        let hash = crypto.HmacSHA256(messageArray, secretArray);
        let token = crypto.enc.Base64.stringify(hash);
        return token;
    }

    /* public static string GetHeaderDateTime()
    {
        return DateTime.UtcNow.ToString("R");
    } */

    private GetHeaderDateTime() {
        
        return new Date().toUTCString();
    }

    /* public static string GenerateAuthenticationToken(string httpMethod, string uri, string headerDate, string publicKey, string privateKey)
    {
        var signature = $"{httpMethod}|{uri}|{headerDate}".ToLower();
        var encryptedSignature = GenerateHmacSha256Token(signature, privateKey);
        var authorizationToken = $"{publicKey}:{encryptedSignature}";
        var bytes = System.Text.Encoding.UTF8.GetBytes(authorizationToken);
        return Convert.ToBase64String(bytes);
    } */

    private GenerateAuthenticationToken(
        httpMethod: string,
        uri: string,
        headerDate: string,
        publicKey: string,
        privateKey: string,
        ): string {

        let signature = `${httpMethod}|${uri}|${headerDate}`.toLowerCase();
        let encryptedSignature = this.GenerateHmacSha256Token(signature, privateKey);
        let authToken = `${publicKey}:${encryptedSignature}`;
        let authTokenBytes = new TextEncoder().encode(authToken);
        let token = btoa(String.fromCharCode(...Array.from(authTokenBytes)));

        return token;
    }

    public setAuthHeaders(
        headers: HttpHeaders,
        httpMethod: string, // todo.. replace with enum..
        uri: string,
        ): HttpHeaders {

             // todo.. validate inputs..

        let publicKey = this.apiKeys2["public"];
        let privateKey = this.apiKeys2["private"];
        let date = new Date().toUTCString();
        let token = this.GenerateAuthenticationToken(
            httpMethod,
            uri,
            date,
            publicKey,
            privateKey,
        );
        
        headers.set("Authorization", `TSI ${token}`);
        headers.set("X-TSI-Date", date);

        return headers;
    }

    /* #endregion // TSI authorization support */
}
