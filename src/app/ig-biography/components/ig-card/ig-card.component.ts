import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ig-card',
  templateUrl: './ig-card.component.html',
  styleUrls: ['./ig-card.component.scss'],
})
export class IgCardComponent implements OnInit {
  @Input() igBiography!: FormGroup;
  @ViewChild('offcanvas') offcanvas!: ElementRef<HTMLInputElement>;
  i18n = environment.i18n;

  constructor(
    public toastService: ToastService,
    private offcanvasService: NgbOffcanvas
  ) {}

  ngOnInit(): void {}

  copiarAlPortapapeles(isCorrect: boolean) {
    if (!isCorrect) {
      this.toastService.show('LLene correctamente los campos', {
        classname: 'bg-danger text-light',
        faIcon: 'fa-solid fa-circle-exclamation',
        delay: 1500,
      });
      return;
    }

    // Crea un campo de texto "oculto"
    var aux = document.createElement('textarea');

    // Asigna el contenido del elemento especificado al valor del campo
    aux.innerHTML = `${this.igBiography.value.miniBio.trim()}
${this.igBiography.value.autoridad.trim()}
${this.igBiography.value.descripcion.trim()}
${this.igBiography.value.alerta.trim()}`.trim();

    // Añade el campo a la página
    document.body.appendChild(aux);

    // Selecciona el contenido del campo
    aux.select();

    // Copia el texto seleccionado
    document.execCommand('copy');

    // Elimina el campo de la página
    document.body.removeChild(aux);

    this.showStandard();
    setTimeout(() => {
      this.offcanvasService.open(this.offcanvas, { position: 'bottom' });
    }, 800);
  }

  showStandard() {
    this.toastService.show('Copiado', {
      classname: 'bg-success text-light',
      faIcon: 'fa-solid fa-check',
      delay: 800,
    });
  }

  clearForm() {
    window.location = window.location
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

  ngOnDestroy(): void {
    this.toastService.clear();
  }
}
