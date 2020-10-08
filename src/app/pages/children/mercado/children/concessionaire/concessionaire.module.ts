import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcessionairePageRoutingModule } from './concessionaire-routing.module';

import { ConcessionairePage } from './concessionaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcessionairePageRoutingModule
  ],
  declarations: [ConcessionairePage]
})
export class ConcessionairePageModule {}
