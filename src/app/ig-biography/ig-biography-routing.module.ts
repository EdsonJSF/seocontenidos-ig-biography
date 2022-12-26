import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgBiographyComponent } from './pages/ig-biography/ig-biography.component';

const routes: Routes = [
  {
    path: '',
    component: IgBiographyComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IgBiographyRoutingModule {}
