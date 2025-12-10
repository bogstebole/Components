import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardHeaderComponent } from '../card/card-header.component';
import { CardFooterComponent } from '../card/card-footer.component';
import { CardSectionComponent } from '../card/card-section.component';
import { BadgeComponent } from '../badge/badge.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-demo-gallery',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardSectionComponent,
    BadgeComponent,
    IconComponent
  ],
  templateUrl: './demo-gallery.component.html',
  styleUrls: ['./demo-gallery.component.css']
})
export class DemoGalleryComponent { }
