import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ListItemState = 'default' | 'selected';

@Component({
    selector: 'fynn-list-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
    @Input() state: ListItemState = 'default';
    @Input() collapsed: boolean = false;
    @Input() disabled: boolean = false;

    get classes(): string {
        return [
            'fynn-list-item',
            `state-${this.state}`,
            this.collapsed ? 'collapsed' : '',
            this.disabled ? 'disabled' : '',
        ].filter(Boolean).join(' ');
    }
}
