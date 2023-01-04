import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputsService } from '../../services/inputs.service';

@Component({
  selector: 'app-ig-bio-content',
  templateUrl: './ig-bio-content.component.html',
  styleUrls: ['./ig-bio-content.component.scss'],
})
export class IgBioContentComponent implements OnInit {
  @Input() igBiography!: FormGroup;
  inputs: any[] = [];

  constructor(private inputsService: InputsService) {}

  ngOnInit(): void {
    this.inputs = this.inputsService.inputs;
  }
}
