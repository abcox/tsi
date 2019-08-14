import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AccountsService } from './api/accounts.service';
import { AgreementsService } from './api/agreements.service';
import { ContactsService } from './api/contacts.service';
import { ContractsService } from './api/contracts.service';
import { DiagnosticsService } from './api/diagnostics.service';
import { MasterTablesService } from './api/masterTables.service';
import { OpportunityService } from './api/opportunity.service';
import { PriceBookService } from './api/priceBook.service';
import { ProjectsService } from './api/projects.service';
import { PurchaseOrdersService } from './api/purchaseOrders.service';
import { QuotesService } from './api/quotes.service';
import { RepsService } from './api/reps.service';
import { ServiceOrdersService } from './api/serviceOrders.service';
import { TasksService } from './api/tasks.service';
import { TimeEntryService } from './api/timeEntry.service';
import { TimeSlipService } from './api/timeSlip.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AccountsService,
    AgreementsService,
    ContactsService,
    ContractsService,
    DiagnosticsService,
    MasterTablesService,
    OpportunityService,
    PriceBookService,
    ProjectsService,
    PurchaseOrdersService,
    QuotesService,
    RepsService,
    ServiceOrdersService,
    TasksService,
    TimeEntryService,
    TimeSlipService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
