import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-wedding-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wedding-gallery.component.html',
  styleUrl: './wedding-gallery.component.scss'
})
export class WeddingGalleryComponent {

  data = [
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-white-3.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-white-4.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-white-9.jpg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-white-6.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-white-red-1.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-white-red-2.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-white-red-3.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-red-1.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-normal-1.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-white-normal.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-normal-2.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-normal-3.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-yellow-1.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-yellow-2.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-yellow-3.jpeg'
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-yellow-4.jpeg'
    },
  ]
}
