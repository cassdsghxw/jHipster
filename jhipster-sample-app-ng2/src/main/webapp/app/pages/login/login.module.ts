import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JhipsterSampleAppNg2SharedModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Login } from './login.component';
import { routing } from './login.routing';


@NgModule({
  imports: [
    CommonModule,
    JhipsterSampleAppNg2SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Login
  ]
})
export class LoginModule {}
