import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { navbarRoute } from '../app.route';
import { routes } from '../app.routing';
import { errorRoute } from './';
const LAYOUT_ROUTES = [
    // navbarRoute,
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    // { path: '**', redirectTo: 'pages/dashboard' },
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule {}
