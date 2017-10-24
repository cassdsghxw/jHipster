import { Route } from '@angular/router';

import { IcHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'ic-health',
    component: IcHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};
