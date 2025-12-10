import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'badge',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  @Input() variant: 'primary' | 'success' | 'warning' | 'danger' | 'primary-faded' | 'success-faded' | 'warning-faded' | 'danger-faded' | 'medium-subtle' | 'medium' = 'medium-subtle';
  @Input() icon: string = '';
}
