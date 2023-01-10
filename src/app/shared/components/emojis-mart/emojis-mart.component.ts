import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

import { EmojisMartService } from './emojis-mart.service';
import { InputsService } from '../../../ig-biography/services/inputs.service';

@Component({
  selector: 'app-emojis-mart',
  templateUrl: './emojis-mart.component.html',
  styleUrls: ['./emojis-mart.component.scss'],
})
export class EmojisMartComponent implements OnInit {
  i18n = environment.i18n;

  public get show(): boolean {
    return this.emojisMartService.show;
  }

  public get activeInput(): string {
    return this.inputsService.activeInput;
  }

  constructor(
    private emojisMartService: EmojisMartService,
    private inputsService: InputsService
  ) {}

  ngOnInit(): void {}

  addEmoji(event: any) {
    this.inputsService.igInputForm.value += event.emoji.native;

    const input = document.getElementById(
      this.activeInput
    )! as HTMLInputElement;
    input.value += event.emoji.native;

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
  }

  hideEmojis() {
    this.inputsService.activateInput('');
    this.emojisMartService.changeMode(false);
  }
}
