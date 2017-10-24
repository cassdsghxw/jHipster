import { Route } from '@angular/router';

import { IcConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'ic-configuration',
    component: IcConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};
