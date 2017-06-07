import { Component, ViewContainerRef, AfterViewInit, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { BaThemeConfig } from './theme/theme.config';
import { layoutPaths } from './theme/theme.constants';

import { Router, ActivatedRouteSnapshot, NavigationEnd, RoutesRecognized } from '@angular/router';

import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper, StateStorageService } from './shared';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    styleUrls: ['./app.component.scss'],
    template: `
        <jhi-page-ribbon></jhi-page-ribbon>
        <div>
            <router-outlet name="navbar"></router-outlet>
        </div>
        <main [class.menu-collapsed]="isMenuCollapsed" baThemeRun>
            <div class="additional-bg"></div>
            <router-outlet></router-outlet>
        </main>
    `
})
export class App implements AfterViewInit, OnInit {

    isMenuCollapsed: boolean = false;

    constructor(
        private _state: GlobalState,
        private _imageLoader: BaImageLoaderService,
        private _spinner: BaThemeSpinner,
        private viewContainerRef: ViewContainerRef,
        private themeConfig: BaThemeConfig,
        private jhiLanguageHelper: JhiLanguageHelper,
        private jhiLanguageService: JhiLanguageService,
        private router: Router,
        private $storageService: StateStorageService) {

        themeConfig.config();
        this._loadImages();
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
        // Just for forcing translation loading
        jhiLanguageService.setLocations(['all']);
    }

    public ngAfterViewInit(): void {
        // hide spinner once all loaders are completed
        BaThemePreloader.load().then((values) => {
            this._spinner.hide();
        });
    }

    private _loadImages(): void {
        // register some loaders
        BaThemePreloader.registerLoader(this._imageLoader.load('/content/img/sky-bg.jpg'));
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'jhipsterSampleAppNg2App';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
        });
    }

}
