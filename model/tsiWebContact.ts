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


export interface TsiWebContact {
    /**
     * Gets or sets the Account the contact is associated with.
     */
    accountNumber?: number;
    /**
     * Gets or sets the prefix.
     */
    prefix?: string;
    /**
     * Gets or sets the first name.
     */
    firstName: string;
    /**
     * Gets or sets the middle initial.
     */
    middleInitial?: string;
    /**
     * Gets or sets the last name.
     */
    lastName: string;
    /**
     * Gets or sets the contcat full name.
     */
    name?: string;
    /**
     * Gets or sets the title.
     */
    title?: string;
    /**
     * Gets or sets the department.
     */
    department?: string;
    /**
     * Gets or sets address line 1.
     */
    address1?: string;
    /**
     * Gets or sets address line 2.
     */
    address2?: string;
    /**
     * Gets or sets the city.
     */
    city?: string;
    /**
     * Gets or sets the state.
     */
    state?: string;
    /**
     * Gets or sets the postal code.
     */
    postalCode?: string;
    /**
     * Gets or sets the country.
     */
    country?: string;
    /**
     * Gets or sets the personal notes.
     */
    personalNotes?: string;
    /**
     * Gets or sets the assistant.
     */
    assistant?: string;
    /**
     * Gets or sets the link identifier.
     */
    linkId?: number;
    /**
     * Gets or sets a value indicating whether this {Tsi.Web.Contact} is inactive.
     */
    inactive?: boolean;
}