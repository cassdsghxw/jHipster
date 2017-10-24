import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    IconnectSampleAppMonolithSharedLibsModule,
    IconnectSampleAppMonolithSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    HasAnyAuthorityDirective,
    IcLoginModalComponent
} from './';

@NgModule({
    imports: [
        IconnectSampleAppMonolithSharedLibsModule,
        IconnectSampleAppMonolithSharedCommonModule
    ],
    declarations: [
        IcLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    entryComponents: [IcLoginModalComponent],
    exports: [
        IconnectSampleAppMonolithSharedCommonModule,
        IcLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class IconnectSampleAppMonolithSharedModule {}
