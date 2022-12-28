import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ig-biography',
  templateUrl: './ig-biography.component.html',
  styleUrls: ['./ig-biography.component.scss'],
})
export class IgBiographyComponent implements OnInit {
  igBiography!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.igBiography = this.initForm();
    console.log(this.igBiography);
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      miniBio: ['', [Validators.maxLength(40)]],
      autoridad: ['', [Validators.maxLength(35)]],
      descripcion: ['', [Validators.maxLength(50)]],
      alerta: ['', [Validators.maxLength(20)]],
    });
  }

  copiarAlPortapapeles() {
    // Crea un campo de texto "oculto"
    var aux = document.createElement('textarea');

    // Asigna el contenido del elemento especificado al valor del campo
    aux.innerHTML = `${this.igBiography.value.miniBio}
${this.igBiography.value.autoridad}
${this.igBiography.value.descripcion}
${this.igBiography.value.alerta}`.trim();

    // Añade el campo a la página
    document.body.appendChild(aux);

    // Selecciona el contenido del campo
    aux.select();

    // Copia el texto seleccionado
    document.execCommand('copy');

    // Elimina el campo de la página
    document.body.removeChild(aux);
  }
}
