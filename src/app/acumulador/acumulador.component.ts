import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.css']
})
export class AcumuladorComponent {

  acumulado: number = 0;  
  addToAcumulado(event){
    this.acumulado = this.acumulado + event;
  }


}