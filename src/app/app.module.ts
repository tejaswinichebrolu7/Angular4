import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTextModule } from '../../node_modules/primeng/components/inputtext/inputtext';
import { TieredMenuModule } from '../../node_modules/primeng/components/tieredmenu/tieredmenu';
import { MenuItem } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';
import { MegaMenuModule } from 'primeng/primeng';
import { PanelMenuModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/primeng';

import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BreakfastComponent } from './breakfast/breakfast.component';
import { VegmenuComponent } from './vegmenu/vegmenu.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { NonVegmenuComponent } from './non-vegmenu/non-vegmenu.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreakfastComponent,
    VegmenuComponent,
    LunchComponent,
    DinnerComponent,
    NonVegmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TieredMenuModule,
    InputTextModule,
    DataTableModule,
    GalleriaModule,
    MegaMenuModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
