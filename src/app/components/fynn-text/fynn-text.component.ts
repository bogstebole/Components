import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fynn-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fynn-text.component.html',
  styleUrls: ['./fynn-text.component.css']
})
export class FynnTextComponent {
  @Input() color: 'dark' | 'medium' | 'medium-faded' | 'primary' | 'error' = 'dark';
  @Input() size: 'label' | 'paragraph' | 'h2' | 'h1' = 'paragraph';
  @Input() weight: 'regular' | 'semibold' = 'regular';

  getClasses(): string {
    return `color-${this.color} size-${this.size} weight-${this.weight}`;
  }
}
