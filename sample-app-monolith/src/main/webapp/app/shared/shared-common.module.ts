import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    IconnectSampleAppMonolithSharedLibsModule,
    JhiLanguageHelper,
    FindLanguageFromKeyPipe,
    IcAlertComponent,
    IcAlertErrorComponent
} from './';

@NgModule({
    imports: [
        IconnectSampleAppMonolithSharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        IcAlertComponent,
        IcAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        IconnectSampleAppMonolithSharedLibsModule,
        FindLanguageFromKeyPipe,
        IcAlertComponent,
        IcAlertErrorComponent
    ]
})
export class IconnectSampleAppMonolithSharedCommonModule {}
