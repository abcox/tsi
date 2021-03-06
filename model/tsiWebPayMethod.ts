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


export interface TsiWebPayMethod {
    PayMethodId?: number;
    PayMethodTypeId?: number;
    PayMethodType?: string;
    Name?: string;
    CreditCardType?: string;
    CreditCardName?: string;
    ACHAccountHolderName?: string;
    ACHAccountHolderType?: string;
    ACHAccountType?: string;
    ACHBankName?: string;
    GLAccount?: string;
    GLDepartment?: string;
    Token?: string;
    MaskedCreditCardNumber?: string;
    Address1?: string;
    Address2?: string;
    City?: string;
    State?: string;
    PostalCode?: string;
    Country?: string;
    CreditCardExpirationMonth?: number;
    CreditCardExpirationYear?: number;
    ContactNumber?: number;
    ContactName?: string;
    Inactive?: boolean;
    Converted?: boolean;
    IsDefault?: boolean;
    AccountNumber?: number;
}
