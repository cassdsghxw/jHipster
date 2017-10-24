import { Route } from '@angular/router';

import { IcMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'ic-metrics',
    component: IcMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};
