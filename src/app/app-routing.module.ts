import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BreakfastComponent } from './breakfast/breakfast.component';
import { VegmenuComponent } from './vegmenu/vegmenu.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { NonVegmenuComponent } from './non-vegmenu/non-vegmenu.component';

const routes: Routes = [
  { path: 'vegmenu', component: VegmenuComponent,
   children: [
      { path: 'breakfast', component: BreakfastComponent },
      { path: 'lunch', component: LunchComponent },
      { path: 'dinner', component: DinnerComponent }
    ]
   },
  { path: 'non-vegmenu', component: NonVegmenuComponent,
   children: [
      { path: 'breakfast', component: BreakfastComponent },
      { path: 'lunch', component: LunchComponent },
      { path: 'dinner', component: DinnerComponent }
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/