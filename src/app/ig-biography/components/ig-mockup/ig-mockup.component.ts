import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ig-mockup',
  templateUrl: './ig-mockup.component.html',
  styleUrls: ['./ig-mockup.component.scss'],
})
export class IgMockupComponent implements OnInit {
  @Input() igBiography!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
