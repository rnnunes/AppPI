import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card02Page } from './card02.page';

const routes: Routes = [
  {
    path: '',
    component: Card02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card02PageRoutingModule {}
