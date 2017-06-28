import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterSampleAppNg2SharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleAppNg2HomeModule } from './home/home.module';
import { JhipsterSampleAppNg2AdminModule } from './admin/admin.module';
import { JhipsterSampleAppNg2AccountModule } from './account/account.module';
import { JhipsterSampleAppNg2EntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
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
        JhipsterSampleAppNg2SharedModule,
        JhipsterSampleAppNg2HomeModule,
        JhipsterSampleAppNg2AdminModule,
        JhipsterSampleAppNg2AccountModule,
        JhipsterSampleAppNg2EntityModule
    ],
    declarations: [
        JhiMainComponent,
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
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleAppNg2AppModule {}
