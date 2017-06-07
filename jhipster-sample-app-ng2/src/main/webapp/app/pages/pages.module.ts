import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { JhipsterSampleAppNg2SharedModule } from '../shared';

import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, JhipsterSampleAppNg2SharedModule, NgaModule, routing],
  declarations: [Pages]
})
export class PagesModule {
}
