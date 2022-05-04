import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card02PageRoutingModule } from './card02-routing.module';

import { Card02Page } from './card02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card02PageRoutingModule
  ],
  declarations: [Card02Page]
})
export class Card02PageModule {}
