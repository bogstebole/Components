import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'solid' | 'outline' | 'clear';
export type ButtonColor = 'primary' | 'danger' | 'dark';
export type ButtonSize = 'default' | 'small';

@Component({
    selector: 'fynn-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './fynn-button.component.html',
    styleUrls: ['./fynn-button.component.css']
})
export class FynnButtonComponent {
    @Input() variant: ButtonVariant = 'solid';
    @Input() color: ButtonColor = 'primary';
    @Input() size: ButtonSize = 'default';
    @Input() iconOnly: boolean = false;
    @Input() disabled: boolean = false;
    @Input() type: 'button' | 'submit' | 'reset' = 'button';

    get classes(): string {
        return [
            'fynn-button',
            `variant-${this.variant}`,
            `color-${this.color}`,
            `size-${this.size}`,
            this.iconOnly ? 'icon-only' : '',
        ].join(' ');
    }
}
