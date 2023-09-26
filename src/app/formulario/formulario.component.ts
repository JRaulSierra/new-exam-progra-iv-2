import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  agregar: number = 0;

  @Output() valorResetado = new EventEmitter<number>();

  resetAgregar() {
    this.valorResetado.emit(this.agregar);
    this.agregar = 0;
  }

}