import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-wedding-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wedding-event.component.html',
  styleUrl: './wedding-event.component.scss'
})
export class WeddingEventComponent {

  dividerStyle = {'background-image': 'url(assets/params/images/accessory/divider-arrow.svg)'}
}
