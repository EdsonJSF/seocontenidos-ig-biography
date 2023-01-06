import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputsService {
  private _activeInput: string = '';

  inputs = [
    {
      title: 'Nombre de mi cuenta',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem?',
      css: 'bg-primary text-white',
      name: 'nombre',
      maxlength: 30
    },
    {
      title: '¿A quien le hablo?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem?',
      css: 'bg-danger text-white',
      name: 'miniBio',
      maxlength: 35
    },
    {
      title: '¿Qué hago por ellos?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem?',
      css: 'bg-warning',
      name: 'autoridad',
      maxlength: 25
    },
    {
      title: '¿Qué me diferencia?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem?',
      css: 'bg-success text-white',
      name: 'descripcion',
      maxlength: 45
    },
    {
      title: 'Llamado a la acción',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem?',
      css: 'bg-secondary text-white',
      name: 'alerta',
      maxlength: 150
    },
  ];

  constructor() {}

  public get activeInput(): string {
    return this._activeInput;
  }

  activateInput(active: string): void {
    this._activeInput = active;
  }
}
