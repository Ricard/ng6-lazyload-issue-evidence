import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModRoutingModule } from './mod-routing.module';
import { CompComponent } from './comp/comp.component';

@NgModule({
  imports: [
    CommonModule,
    ModRoutingModule
  ],
  declarations: [CompComponent]
})
export class ModModule { }
