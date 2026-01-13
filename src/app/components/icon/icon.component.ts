import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <ion-icon 
      [name]="iconName" 
      [style.font-size.px]="size"
      [attr.aria-label]="name">
    </ion-icon>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
    ion-icon {
      display: flex;
    }
  `]
})
export class IconComponent {
  @Input() name: string = '';
  @Input() size: number = 24;

  /**
   * Automatically ensures all icons use the outline variant
   */
  get iconName(): string {
    if (!this.name) return '';

    // If the icon name already has a variant suffix (outline, sharp, filled), use it as is
    if (this.name.endsWith('-outline') || this.name.endsWith('-sharp') || this.name.endsWith('-filled')) {
      return this.name;
    }

    // Otherwise, append '-outline' to ensure outline icons are used
    return `${this.name}-outline`;
  }
}
