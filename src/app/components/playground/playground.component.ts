import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from '../badge/badge.component';
import { CardComponent } from '../card/card.component';
import { CardHeaderComponent } from '../card/card-header.component';
import { CardSectionComponent } from '../card/card-section.component';
import { CardFooterComponent } from '../card/card-footer.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BadgeComponent,
    CardComponent,
    CardHeaderComponent,
    CardSectionComponent,
    CardFooterComponent,
    IconComponent
  ],
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  // Badge Properties
  badgeText: string = 'Status Label';
  badgeVariant: 'primary' | 'success' | 'warning' | 'danger' | 'primary-faded' | 'success-faded' | 'warning-faded' | 'danger-faded' | 'medium-subtle' | 'medium' = 'success';
  badgeIcon: string = 'checkmark-circle-outline';

  badgeVariants = [
    'primary', 'primary-faded',
    'success', 'success-faded',
    'warning', 'warning-faded',
    'danger', 'danger-faded',
    'medium', 'medium-subtle'
  ];

  // Card Properties
  cardTitle: string = 'Card Title';
  cardSubtitle: string = 'Subtitle or metadata';
  cardContent: string = 'This is the main content of the card. You can edit this text to see how the card adapts to different content lengths.';
  cardFooterTest: string = 'Action or Footer Text';
  showFooter: boolean = true;
  showBadgeInHeader: boolean = true;
}
