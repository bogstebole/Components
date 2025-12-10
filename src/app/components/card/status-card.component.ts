import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header.component';
import { CardFooterComponent } from './card-footer.component';
import { BadgeComponent } from '../badge/badge.component';
import { FynnTextComponent } from '../fynn-text/fynn-text.component';
import { IconComponent } from '../icon/icon.component';
import { FynnButtonComponent } from '../fynn-button/fynn-button.component';

@Component({
    selector: 'status-card',
    standalone: true,
    imports: [CommonModule, CardComponent, CardHeaderComponent, CardFooterComponent, BadgeComponent, FynnTextComponent, IconComponent, FynnButtonComponent],
    templateUrl: './status-card.component.html',
    styleUrl: './status-card.component.css'
})
export class StatusCardComponent {
    @Input() badge: string = 'Active';
    @Input() badgeVariant: 'primary' | 'success' | 'warning' | 'danger' | 'primary-faded' | 'success-faded' | 'warning-faded' | 'danger-faded' | 'medium-subtle' | 'medium' = 'success-faded';
    @Input() timestamp: string = '';
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() showFooter: boolean = true;
    @Input() footerText: string = '';
}
