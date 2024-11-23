import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-introduce-couple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduce-couple.component.html',
  styleUrl: './introduce-couple.component.scss'
})
export class IntroduceCoupleComponent {
  dividerStyle = {'background-image': 'url(assets/params/images/accessory/divider-arrow.svg)'}
}
