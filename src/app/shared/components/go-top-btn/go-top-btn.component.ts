import { Component } from '@angular/core';

@Component({
  selector: 'app-go-top-btn',
  templateUrl: './go-top-btn.component.html',
  styleUrls: ['./go-top-btn.component.scss'],
})
export class GoTopBtnComponent {
  private _displayBtn: boolean = false;

  get displayBtn(): boolean {
    return this._displayBtn;
  }

  constructor() {
    window.onscroll = () => {
      this.scrolling();
    };
  }

  scrolling() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this._displayBtn = true;
    } else {
      this._displayBtn = false;
    }
  }

  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
