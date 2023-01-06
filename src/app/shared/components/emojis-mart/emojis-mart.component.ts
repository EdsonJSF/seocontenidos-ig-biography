import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

import { ToastService } from '../toast/toast.service';
import { EmojisMartService } from './emojis-mart.service';

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

  constructor(
    private toastService: ToastService,
    private emojisMartService: EmojisMartService
  ) {}

  ngOnInit(): void {}

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

    this.emojisMartService.changeMode(false);

    this.toastService.show('Copiado', {
      classname: 'bg-success text-light',
      faIcon: 'fa-solid fa-check',
      delay: 800,
    });
  }

  hideEmojis() {
    this.emojisMartService.changeMode(false)
  }
}
