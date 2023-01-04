import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ig-bio-content',
  templateUrl: './ig-bio-content.component.html',
  styleUrls: ['./ig-bio-content.component.scss'],
})
export class IgBioContentComponent implements OnInit {
  @Input() igBiography!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
