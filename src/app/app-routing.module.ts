import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CalculadoraPessoasComponent} from "./calculadora-pessoas/calculadora-pessoas.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [{
  path: 'calculadora-pessoas',
  component: CalculadoraPessoasComponent
},
  {path: 'home',
  component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
