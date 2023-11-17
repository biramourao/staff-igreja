import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home'
      },
      {
        label: 'Calculadora de Pessoas',
        icon: 'pi pi-fw pi-calculator',
        routerLink: 'calculadora-pessoas'
      }
    ];
  }
}
