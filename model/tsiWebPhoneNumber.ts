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


export interface TsiWebPhoneNumber {
    /**
     * Gets or sets the identifier.
     */
    phoneNumberId?: number;
    /**
     * Gets or sets the phone number.
     */
    number: string;
    /**
     * Gets or sets the type or extenstion for the phone number.
     */
    location?: string;
    /**
     * Gets or sets a value indicating whether this phone number is primary.
     */
    isPrimary?: boolean;
}
