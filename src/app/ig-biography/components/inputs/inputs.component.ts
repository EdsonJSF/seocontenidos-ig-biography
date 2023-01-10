import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { InputsService } from '../../services/inputs.service';
import { EmojisMartService } from '../../../shared/components/emojis-mart/emojis-mart.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  @Input() igBiography!: FormGroup;
  inputs: any[] = [];
  show: boolean = false;
  selected: number = 0;

  constructor(
    private toastService: ToastService,
    private inputsService: InputsService,
    private emojisMartService: EmojisMartService
  ) {}

  ngOnInit(): void {
    this.inputs = this.inputsService.inputs;
  }

  public get alertaLength(): number {
    return (
      0 -
      this.igBiography.get('miniBio')?.value.length -
      this.igBiography.get('autoridad')?.value.length -
      this.igBiography.get('descripcion')?.value.length
    );
  }

  copiarAlPortapapeles() {
    const inputNombre = document.querySelector<HTMLInputElement>('#nombre');
    if (!inputNombre?.value) {
      this.toastService.show('LLene correctamente el campo', {
        classname: 'bg-danger text-light',
        faIcon: 'fa-solid fa-circle-exclamation',
        delay: 1500,
      });
      return;
    }

    // Crea un campo de texto "oculto"
    var aux = document.createElement('textarea');

    // Asigna el contenido del elemento especificado al valor del campo
    aux.innerHTML = `${inputNombre?.value}`.trim();

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

  changeActive(active: string) {
    this.inputsService.activateInput(active);
  }

  diplayEmojis() {
    this.emojisMartService.changeMode(true);
  }

  setIgInputForm(inputName: string) {
    this.inputsService.igInputForm = this.igBiography.get(inputName);
  }
}
