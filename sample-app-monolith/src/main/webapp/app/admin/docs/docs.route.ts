import { Route } from '@angular/router';

import { IcDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: IcDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};
