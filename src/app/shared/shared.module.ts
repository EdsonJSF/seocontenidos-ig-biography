import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoTopBtnComponent } from './components/go-top-btn/go-top-btn.component';

const importExport = [HeaderComponent, FooterComponent, GoTopBtnComponent];

@NgModule({
  declarations: [importExport],
  imports: [CommonModule],
  exports: importExport,
})
export class SharedModule {}
