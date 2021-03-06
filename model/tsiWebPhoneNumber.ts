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
    PhoneNumberId?: number;
    /**
     * Gets or sets the phone number.
     */
    Number: string;
    /**
     * Gets or sets the type or extenstion for the phone number.
     */
    Location?: string;
    /**
     * Gets or sets a value indicating whether this phone number is primary.
     */
    IsPrimary?: boolean;
}
