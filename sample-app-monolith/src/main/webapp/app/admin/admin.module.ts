import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconnectSampleAppMonolithSharedModule } from '../shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
    adminState,
    AuditsComponent,
    UserMgmtComponent,
    UserDialogComponent,
    UserDeleteDialogComponent,
    UserMgmtDetailComponent,
    UserMgmtDialogComponent,
    UserMgmtDeleteDialogComponent,
    LogsComponent,
    IcMetricsMonitoringModalComponent,
    IcMetricsMonitoringComponent,
    IcHealthModalComponent,
    IcHealthCheckComponent,
    IcConfigurationComponent,
    IcDocsComponent,
    AuditsService,
    IcConfigurationService,
    IcHealthService,
    IcMetricsService,
    LogsService,
    UserResolvePagingParams,
    UserResolve,
    UserModalService
} from './';

@NgModule({
    imports: [
        IconnectSampleAppMonolithSharedModule,
        RouterModule.forRoot(adminState, { useHash: true }),
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        AuditsComponent,
        UserMgmtComponent,
        UserDialogComponent,
        UserDeleteDialogComponent,
        UserMgmtDetailComponent,
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        LogsComponent,
        IcConfigurationComponent,
        IcHealthCheckComponent,
        IcHealthModalComponent,
        IcDocsComponent,
        IcMetricsMonitoringComponent,
        IcMetricsMonitoringModalComponent
    ],
    entryComponents: [
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        IcHealthModalComponent,
        IcMetricsMonitoringModalComponent,
    ],
    providers: [
        AuditsService,
        IcConfigurationService,
        IcHealthService,
        IcMetricsService,
        LogsService,
        UserResolvePagingParams,
        UserResolve,
        UserModalService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IconnectSampleAppMonolithAdminModule {}
