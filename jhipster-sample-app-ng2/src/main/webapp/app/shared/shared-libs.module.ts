import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        NgJhipsterModule.forRoot({
            i18nEnabled: true,
            defaultI18nLocation: 'all',
            defaultI18nLang: 'en'
        }),
        InfiniteScrollModule
    ],
    exports: [
        FormsModule,
        HttpModule,
        CommonModule,
        NgbModule,
        NgJhipsterModule,
        InfiniteScrollModule
    ]
})
export class JhipsterSampleAppNg2SharedLibsModule {}
