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
import { HomeComponent } from './home/home.component';
import {ImageModule} from "primeng/image";
import {TabMenuModule} from "primeng/tabmenu";

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraPessoasComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    DividerModule,
    BadgeModule,
    TieredMenuModule,
    ImageModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
