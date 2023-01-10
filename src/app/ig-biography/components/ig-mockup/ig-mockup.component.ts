import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ig-mockup',
  templateUrl: './ig-mockup.component.html',
  styleUrls: ['./ig-mockup.component.scss'],
})
export class IgMockupComponent {
  @Input() igBiography!: FormGroup;
}
