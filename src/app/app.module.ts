import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,ViewChild,Input,Output } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuItem } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';
import { MegaMenuModule } from 'primeng/primeng';
import { PanelMenuModule } from 'primeng/primeng';
import { TabMenuModule } from 'primeng/primeng';
import { InplaceModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { DropdownModule, SelectItem }  from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { RatingModule } from 'primeng/primeng';
import { MessagesModule } from 'primeng/primeng';
import { MessageModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BreakfastComponent } from './breakfast/breakfast.component';
import { VegmenuComponent } from './vegmenu/vegmenu.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { NonVegmenuComponent } from './non-vegmenu/non-vegmenu.component';
import { Cart } from './models/cart';
import { CheckOutComponent } from './check-out/check-out.component';
import { OasComponent } from './oas/oas.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreakfastComponent,
    VegmenuComponent,
    LunchComponent,
    DinnerComponent,
    NonVegmenuComponent,
    CheckOutComponent,
    OasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTableModule,
    GalleriaModule,
    MegaMenuModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    TabMenuModule,
    InplaceModule,
    ButtonModule,
    SplitButtonModule,
    DropdownModule,
    DataListModule,
    RatingModule,
    MessagesModule,
    MessageModule,
    CheckboxModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
