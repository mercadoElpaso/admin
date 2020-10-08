import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EconomicActivityPageRoutingModule } from './economic-activity-routing.module';

import { EconomicActivityPage } from './economic-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EconomicActivityPageRoutingModule
  ],
  declarations: [EconomicActivityPage]
})
export class EconomicActivityPageModule {}
