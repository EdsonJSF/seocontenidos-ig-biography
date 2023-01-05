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
      name: 'nombre',
      css: 'bg-primary text-white',
    },
    {
      title: '¿A quien le hablo?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem?',
      name: 'miniBio',
      css: 'bg-danger text-white',
    },
    {
      title: '¿Qué hago por ellos?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem?',
      name: 'autoridad',
      css: 'bg-warning',
    },
    {
      title: '¿Qué me diferencia?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem?',
      name: 'descripcion',
      css: 'bg-success text-white',
    },
    {
      title: 'Llamado a la acción',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem?',
      name: 'alerta',
      css: 'bg-secondary text-white',
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
