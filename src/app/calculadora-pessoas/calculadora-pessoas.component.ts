import {Component, OnInit} from '@angular/core';
import {CultosDiaSemana, DiaDaSemana} from "../model/cultos-enum";
import {CampusService} from "../services/campus-service";
import {map} from "rxjs";

@Component({
  selector: 'app-calculadora-pessoas',
  templateUrl: './calculadora-pessoas.component.html',
  styleUrls: ['./calculadora-pessoas.component.css']
})
export class CalculadoraPessoasComponent implements OnInit {

  membros: number = 0;
  visitantes: number = 0;
  culto: string | undefined = '';
  campus: Array<string> = new Array<string>();
  selectedCampus: string = '';

  constructor(private campusService : CampusService ) {
  }
  adicionarMembros(numero: number) {
    this.membros+=numero;
  }
  zerarMembros() {
    this.membros = 0;
  }
  adicionarVisitantes(numero: number) {
    this.visitantes+=numero;
  }
  zerarVisitantes() {
    this.visitantes = 0;
  }
  totalPessoas(): number{
    return this.membros + this.visitantes;
  }
  dataAtual(): string {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleDateString();
  }
  mensagemWhatsapp(): string {
    var enderecoApiWhatsapp = "https://api.whatsapp.com/send?text=";
    var mensagem = `*Relatório Estratégico Campus `+this.selectedCampus+`*
    *`+this.culto+`*
    `+this.dataAtual()+`
    *Quantidade de pessoas*= `+this.totalPessoas().toString()+`
    *Conversão*=
    *Reconciliação*=
    *Visitantes*= `+this.visitantes
    return encodeURI(enderecoApiWhatsapp+mensagem);
  }
  carregarCampus(){
    this.campusService.getCampus().pipe(
      map(
        (data) => {
          for (let dado of data) {
            this.campus.push(dado.campus);
          }
        }
      )
    ).subscribe();
  }

  carregarCulto(){
    this.culto = CultosDiaSemana.get(DiaDaSemana[new Date().getDay()]);
    if (!this.culto){
      this.culto = DiaDaSemana[new Date().getDay()];
    }
  }

  ngOnInit(): void  {
    this.carregarCampus();
    this.carregarCulto();
  }
}
