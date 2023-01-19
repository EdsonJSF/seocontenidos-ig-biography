import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputsService {
  private _activeInput: string = '';
  igInputForm!: any;

  inputs = [
    {
      title: 'Nombre de mi cuenta',
      content:
        'Escribe 3 palabras claves que identifiquen lo que hace tu negocio. Ejemplos: Marketing, Ferreteria, Panaderia.',
      css: 'bg-primary text-white',
      name: 'nombre',
      maxlength: 30,
    },
    {
      title: '¿A quién le hablo?',
      content:
        'Describe a las personas a quien va dirigido tu contenido. Ejemplo: Emprendedores exitosos, mujeres con buen gusto, etc.',
      css: 'bg-danger text-white',
      name: 'miniBio',
      maxlength: 35,
    },
    {
      title: '¿Qué hago por ellos?',
      content:
        'Escribe qué hacer por ellos en la cuenta. Ejemplo: Te daremos consejos de maquillaje, te asesoramos para cuidar tu salud, etc.',
      css: 'bg-warning',
      name: 'autoridad',
      maxlength: 25,
    },
    {
      title: '¿Qué me diferencia?',
      content:
        'Escribe qué te hace diferente, ¿por qué eres mejor que otros? Ejemplo: Tenemos 8 años de experiencia, estamos certificados, etc.',
      css: 'bg-success text-white',
      name: 'descripcion',
      maxlength: 45,
    },
    {
      title: 'Llamado a la acción',
      content:
        'Pídeles que te sigan o te contacten y promételes algo a cambio. Ejemplo: Síguenos para que despegues en redes, contáctanos para darte un descuento.',
      css: 'bg-secondary text-white',
      name: 'alerta',
      maxlength: 150,
    },
  ];

  public get activeInput(): string {
    return this._activeInput;
  }

  activateInput(active: string): void {
    this._activeInput = active;
  }
}
