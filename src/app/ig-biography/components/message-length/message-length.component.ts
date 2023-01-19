import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message-length',
  templateUrl: './message-length.component.html',
  styleUrls: ['./message-length.component.scss'],
})
export class MessageLengthComponent implements OnInit {
  @Input() igBiography!: FormGroup;

  public get alertaLength(): number {
    return (
      0 -
      this.igBiography.get('miniBio')?.value.length -
      this.igBiography.get('autoridad')?.value.length -
      this.igBiography.get('descripcion')?.value.length
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
