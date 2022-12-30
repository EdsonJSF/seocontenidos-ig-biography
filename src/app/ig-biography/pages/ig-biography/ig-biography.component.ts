import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ig-biography',
  templateUrl: './ig-biography.component.html',
  styleUrls: ['./ig-biography.component.scss'],
})
export class IgBiographyComponent implements OnInit {
  igBiography!: FormGroup;
  _alertaLength: number = 150;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.igBiography = this.initForm();
  }

  public get alertaLength(): number {
    this._alertaLength =
      0 -
      this.igBiography.get('miniBio')?.value.length -
      this.igBiography.get('autoridad')?.value.length -
      this.igBiography.get('descripcion')?.value.length;

    return this._alertaLength;
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      miniBio: ['', [Validators.required, Validators.maxLength(35)]],
      autoridad: ['', [Validators.required, Validators.maxLength(25)]],
      descripcion: ['', [Validators.required, Validators.maxLength(45)]],
      alerta: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }
}
