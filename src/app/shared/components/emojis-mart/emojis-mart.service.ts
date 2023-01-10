import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmojisMartService {
  private _show: boolean = false;

  public get show(): boolean {
    return this._show;
  }

  constructor() {}

  changeMode(show: boolean) {
    this._show = show;
  }
}
