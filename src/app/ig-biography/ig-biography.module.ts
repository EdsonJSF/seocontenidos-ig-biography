import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IgBiographyRoutingModule } from './ig-biography-routing.module';
import { IgBiographyComponent } from './pages/ig-biography/ig-biography.component';
import { IgCardComponent } from './components/ig-card/ig-card.component';

@NgModule({
  declarations: [IgBiographyComponent, IgCardComponent],
  imports: [
    CommonModule,
    IgBiographyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class IgBiographyModule {}
