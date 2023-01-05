import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';

import { ToastService } from 'src/app/shared/components/toast/toast.service';

@Component({
  selector: 'app-ig-biography',
  templateUrl: './ig-biography.component.html',
  styleUrls: ['./ig-biography.component.scss'],
})
export class IgBiographyComponent implements OnInit {
  igBiography!: FormGroup;
  i18n = environment.i18n;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.igBiography = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      nombre: [''],
      miniBio: ['', [Validators.required, Validators.maxLength(35)]],
      autoridad: ['', [Validators.required, Validators.maxLength(25)]],
      descripcion: ['', [Validators.required, Validators.maxLength(45)]],
      alerta: ['', [Validators.required]],
    });
  }

  addEmoji(event: any) {
    // Crea un campo de texto "oculto"
    var aux = document.createElement('textarea');

    // Asigna el contenido del elemento especificado al valor del campo
    aux.innerHTML = `${event.emoji.native}`;

    // Añade el campo a la página
    document.body.appendChild(aux);

    // Selecciona el contenido del campo
    aux.select();

    // Copia el texto seleccionado
    document.execCommand('copy');

    // Elimina el campo de la página
    document.body.removeChild(aux);

    this.toastService.show('Copiado', {
      classname: 'bg-success text-light',
      faIcon: 'fa-solid fa-check',
      delay: 800,
    });
  }
}
