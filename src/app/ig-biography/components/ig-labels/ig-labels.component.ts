import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputsService } from '../../services/inputs.service';

@Component({
  selector: 'app-ig-labels',
  templateUrl: './ig-labels.component.html',
  styleUrls: ['./ig-labels.component.scss'],
})
export class IgLabelsComponent implements OnInit {
  @Input() igBiography!: FormGroup;
  inputs: any[] = [];

  public get alertaLength(): number {
    return (
      0 -
      this.igBiography.get('miniBio')?.value.length -
      this.igBiography.get('autoridad')?.value.length -
      this.igBiography.get('descripcion')?.value.length
    );
  }

  public get activeInput(): string {
    return this.inputsService.activeInput;
  }

  constructor(private inputsService: InputsService) {}

  ngOnInit(): void {
    this.inputs = this.inputsService.inputs;
  }
}
