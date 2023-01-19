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

    public get activeInput(): string {
    return this.inputsService.activeInput;
  }

  constructor(private inputsService: InputsService) {}

  ngOnInit(): void {
    this.inputs = this.inputsService.inputs;
  }
}
