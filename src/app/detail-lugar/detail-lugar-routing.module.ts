import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailLugarPage } from './detail-lugar.page';

const routes: Routes = [
  {
    path: '',
    component: DetailLugarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailLugarPageRoutingModule {}
