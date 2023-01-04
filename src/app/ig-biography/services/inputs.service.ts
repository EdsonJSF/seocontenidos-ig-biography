import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputsService {
  private _activeInput: string = '';

  constructor() {}

  public get activeInput(): string {
    return this._activeInput;
  }

  activateInput(active: string): void {
    this._activeInput = active;
  }
}
