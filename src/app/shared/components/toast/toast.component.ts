import { Component, TemplateRef } from '@angular/core';

import { ToastService } from './toast.service';

@Component({
  selector: 'app-toasts',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      class="w-auto fs-1 p-3"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 1000"
      (hidden)="toastService.remove(toast)"
    >
      <i *ngIf="toast.faIcon" class="me-2" [class]="toast.faIcon"></i>

      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
  host: {
    class: 'toast-container position-fixed top-50 start-50 translate-middle',
    style: 'z-index: 1200',
  },
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
