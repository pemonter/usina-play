import { Component, Input } from '@angular/core';

@Component({
  selector: 'rounded-icon',
  templateUrl: './rounded-icon.component.html',
  styleUrls: ['./rounded-icon.component.scss'],
})
export class RoundedIconComponent {

  @Input() name: string;
  @Input() size: 'small' | 'medium' | 'large';
  @Input() color: string;
  
}
