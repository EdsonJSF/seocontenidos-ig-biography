import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbTooltipModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

import { IgBiographyRoutingModule } from './ig-biography-routing.module';

import { IgBiographyComponent } from './pages/ig-biography/ig-biography.component';
import { IgCardComponent } from './components/ig-card/ig-card.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { IgMockupComponent } from './components/ig-mockup/ig-mockup.component';
import { IgLabelsComponent } from './components/ig-labels/ig-labels.component';
import { IgHeaderComponent } from './components/ig-header/ig-header.component';
import { IgBioContentComponent } from './components/ig-bio-content/ig-bio-content.component';
import { MessageLengthComponent } from './components/message-length/message-length.component';

@NgModule({
  declarations: [
    IgBiographyComponent,
    IgCardComponent,
    InputsComponent,
    IgMockupComponent,
    IgLabelsComponent,
    IgHeaderComponent,
    IgBioContentComponent,
    MessageLengthComponent,
  ],
  imports: [
    CommonModule,
    IgBiographyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbToastModule,
  ],
})
export class IgBiographyModule {}
