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
    console.log(this.igBiography);
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      miniBio: ['', [Validators.maxLength(40)]],
      autoridad: ['', [Validators.maxLength(35)]],
      descripcion: ['', [Validators.maxLength(50)]],
      alerta: ['', [Validators.maxLength(20)]],
    });
  }
}
