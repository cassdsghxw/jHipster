import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { IconnectSampleAppMonolithSharedModule, UserRouteAccessService } from './shared';
import { IconnectSampleAppMonolithHomeModule } from './home/home.module';
import { IconnectSampleAppMonolithAdminModule } from './admin/admin.module';
import { IconnectSampleAppMonolithAccountModule } from './account/account.module';
import { IconnectSampleAppMonolithEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    IcMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        IconnectSampleAppMonolithSharedModule,
        IconnectSampleAppMonolithHomeModule,
        IconnectSampleAppMonolithAdminModule,
        IconnectSampleAppMonolithAccountModule,
        IconnectSampleAppMonolithEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        IcMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ IcMainComponent ]
})
export class IconnectSampleAppMonolithAppModule {}
