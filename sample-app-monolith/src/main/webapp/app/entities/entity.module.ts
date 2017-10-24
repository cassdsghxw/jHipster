import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IconnectSampleAppMonolithCustomerModule } from './customer/customer.module';
import { IconnectSampleAppMonolithOrderModule } from './order/order.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        IconnectSampleAppMonolithCustomerModule,
        IconnectSampleAppMonolithOrderModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IconnectSampleAppMonolithEntityModule {}
