import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailLugarPageRoutingModule } from './detail-lugar-routing.module';

import { DetailLugarPage } from './detail-lugar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailLugarPageRoutingModule
  ],
  declarations: [DetailLugarPage]
})
export class DetailLugarPageModule {}
