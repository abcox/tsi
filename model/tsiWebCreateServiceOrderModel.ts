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
import { SystemNullableTsiWebOptionalDateTime } from './systemNullableTsiWebOptionalDateTime';
import { SystemNullableTsiWebSplitDateTime } from './systemNullableTsiWebSplitDateTime';
import { TsiWebAlternateAddress } from './tsiWebAlternateAddress';


export interface TsiWebCreateServiceOrderModel {
    AccountNumber?: number;
    ContactNumber?: number;
    TechnicianAssigned?: number;
    EstimatedHours?: number;
    EstimatedMinutes?: number;
    CallBackCount?: number;
    RepToCredit?: number;
    ContractNumber?: number;
    TakenBy?: number;
    DispatchBoardNumber?: number;
    PayMethodsId?: number;
    Severity?: number;
    AlternatePhoneNumber?: string;
    AlternatePhoneLocation?: string;
    AlternateContactEmailAddress?: string;
    AlternateContactPhoneNumber?: string;
    AlternateContactPhoneLocation?: string;
    BriefDescription?: string;
    Reference?: string;
    Priority?: string;
    Status?: string;
    ServiceOrderType?: string;
    System?: string;
    WorkRequested?: string;
    WorkPerformed?: string;
    PaymentMethod?: string;
    ShippingMethod?: string;
    InternalComments?: string;
    DirectionsToLocation?: string;
    CustomerPurchaseOrder?: string;
    VerifiedBy?: string;
    ServiceZone?: string;
    RequestedBy?: string;
    TagNumber?: string;
    LoanAgreement?: string;
    DebitCreditMemo?: string;
    InvoiceTerms?: string;
    FreightTerms?: string;
    SalesTaxCode?: string;
    DateTimeReceived?: Date;
    DateTimeRequested?: SystemNullableTsiWebSplitDateTime;
    DateTimeOpened?: SystemNullableTsiWebOptionalDateTime;
    DateTimeClosed?: SystemNullableTsiWebOptionalDateTime;
    VerifiedDate?: SystemNullableTsiWebOptionalDateTime;
    ResolvedOnPhone?: boolean;
    BidPrice?: number;
    TradeIn?: number;
    Deposit?: number;
    Freight?: number;
    BillToAddressType?: string;
    BillToAddressAccountNumber?: number;
    BillTo?: TsiWebAlternateAddress;
    ShipToAddressType?: string;
    ShipToAddressAccountNumber?: number;
    ShipTo?: TsiWebAlternateAddress;
    UseAlternateShipToTaxCode?: boolean;
    CanReassignToHourlyUsageContractAlreadyInvoiced?: boolean;
    CanUpdateContractMeterReadingToServiceOrderReading?: boolean;
    AllowInactiveContract?: boolean;
    AllowFutureContract?: boolean;
    AllowContractNoRemaining?: boolean;
    UseContractDefaultTech?: boolean;
    DisplayOnCustomerPortal?: boolean;
}
