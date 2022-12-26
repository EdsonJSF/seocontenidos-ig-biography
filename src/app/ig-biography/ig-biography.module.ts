import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IgBiographyRoutingModule } from './ig-biography-routing.module';
import { IgBiographyComponent } from './pages/ig-biography/ig-biography.component';


@NgModule({
  declarations: [
    IgBiographyComponent
  ],
  imports: [
    CommonModule,
    IgBiographyRoutingModule
  ]
})
export class IgBiographyModule { }
