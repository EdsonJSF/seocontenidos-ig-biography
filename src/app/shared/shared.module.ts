import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbToastModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoTopBtnComponent } from './components/go-top-btn/go-top-btn.component';
import { ToastComponent } from './components/toast/toast.component';

const importExport = [
  HeaderComponent,
  FooterComponent,
  GoTopBtnComponent,
  ToastComponent,
];

@NgModule({
  declarations: [importExport],
  imports: [CommonModule, NgbTooltipModule, NgbToastModule],
  exports: importExport,
})
export class SharedModule {}
