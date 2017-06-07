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

import { routing } from './app.routing';
// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesModule } from './pages/pages.module';

// Application wide providers
const APP_PROVIDERS = [
    AppState,
    GlobalState
];
export type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

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
        JhipsterSampleAppNg2EntityModule,
        NgaModule.forRoot(),
        NgbModule.forRoot(),
        PagesModule,
        // routing
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent,
        App
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService,
        APP_PROVIDERS
    ],
    bootstrap: [
        // JhiMainComponent,
         App
    ]
})
export class JhipsterSampleAppNg2AppModule {
    constructor(public appState: AppState) {
    }
}
