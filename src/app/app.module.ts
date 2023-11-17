import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import { CalculadoraPessoasComponent } from './calculadora-pessoas/calculadora-pessoas.component';
import { MenuComponent } from './menu/menu.component';
import {DividerModule} from "primeng/divider";
import {BadgeModule} from "primeng/badge";
import {TieredMenuModule} from "primeng/tieredmenu";

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraPessoasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    DividerModule,
    BadgeModule,
    TieredMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
