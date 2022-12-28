import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ig-card',
  templateUrl: './ig-card.component.html',
  styleUrls: ['./ig-card.component.scss'],
})
export class IgCardComponent implements OnInit {
  @Input() igBiography!: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  copiarAlPortapapeles() {
    // Crea un campo de texto "oculto"
    var aux = document.createElement('textarea');

    // Asigna el contenido del elemento especificado al valor del campo
    aux.innerHTML = `${this.igBiography.value.miniBio.trim()}
${this.igBiography.value.autoridad.trim()}
${this.igBiography.value.descripcion.trim()}
${this.igBiography.value.alerta.trim()}`.trim();

    // Añade el campo a la página
    document.body.appendChild(aux);

    // Selecciona el contenido del campo
    aux.select();

    // Copia el texto seleccionado
    document.execCommand('copy');

    // Elimina el campo de la página
    document.body.removeChild(aux);

    console.log('copiado');
  }
}
