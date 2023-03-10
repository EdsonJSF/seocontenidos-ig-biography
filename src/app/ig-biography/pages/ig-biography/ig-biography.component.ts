import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ig-biography',
  templateUrl: './ig-biography.component.html',
  styleUrls: ['./ig-biography.component.scss'],
})
export class IgBiographyComponent implements OnInit {
  igBiography!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.igBiography = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      nombre: [''],
      miniBio: ['', [Validators.required, Validators.maxLength(35)]],
      autoridad: ['', [Validators.required, Validators.maxLength(25)]],
      descripcion: ['', [Validators.required, Validators.maxLength(45)]],
      alerta: ['', [Validators.required]],
    });
  }
}
