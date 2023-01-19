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
        'Escribe 3 palabras claves que identifiquen lo que hace tu negocio. Ejemplos: Marketing, Ferreteria, Panaderia',
      css: 'bg-primary text-white',
      name: 'nombre',
      maxlength: 30,
    },
    {
      title: '¿A quien le hablo?',
      content:
        'Describe a las personas a quien va dirigido tu contenido. Ejemplo: Emprendedores exitosos, Mujeres con buen gusto, etc,',
      css: 'bg-danger text-white',
      name: 'miniBio',
      maxlength: 35,
    },
    {
      title: '¿Qué hago por ellos?',
      content:
        'Escribe que hacer por ellos en la cuenta. Ejemplo: Te daremos consejos de maquillaje, Te asesoramos para cuidar tu salud, etc',
      css: 'bg-warning',
      name: 'autoridad',
      maxlength: 25,
    },
    {
      title: '¿Qué me diferencia?',
      content:
        'Escribe que te hace diferente, ?porque eres mejor que otros?, ejemplo: Tenemos 8 años de expriencia, estamos certificados, etc',
      css: 'bg-success text-white',
      name: 'descripcion',
      maxlength: 45,
    },
    {
      title: 'Llamado a la acción',
      content:
        'Pideles que te sigan o te contacten y prometeles algo a cambio. Ejemplo: Siguenos para que despegues en redes, contactanos para darte un descuento',
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
