import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-wedding-gallery',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './wedding-gallery.component.html',
  styleUrl: './wedding-gallery.component.scss'
})
export class WeddingGalleryComponent {

  data = [
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-white-3.jpg',
      style: {'background-image': 'url(/browser/assets/params/images/wedding/phuctram-bg-white-3.jpg)'},
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-white-4.jpg',
      style: {'background-image': 'url(assets/params/images/wedding/phuctram-bg-white-4.jpg)'},

    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-red-1.jpg',
      style: {'background-image': 'url(/browser/assets/params/images/wedding/phuctram-bg-red-1.jpg)'},

    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-red-2.jpg',
      style: {'background-image': 'url(/browser/assets/params/images/wedding/phuctram-bg-red-2.jpg)'},
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-yellow-1.jpg',
      style: {'background-image': 'url(/browser/assets/params/images/wedding/phuctram-bg-yellow-1.jpg)'},
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-yellow-2.jpg',
      style: {'background-image': 'url(/browser/assets/params/images/wedding/phuctram-bg-yellow-2.jpg)'},
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-normal-1.jpeg',
      style: {'background-image': 'url(/browser/assets/params/images/wedding/phuctram-bg-normal-1.jpeg)'},
    },
    {
      imgUrl: 'assets/params/images/wedding/phuctram-bg-normal-2.jpeg',
      style: {'background-image': 'url(/browser/assets/params/images/wedding/phuctram-bg-normal-2.jpeg)'},
    },
  ]

  el = inject(ElementRef)
 isScrollInto = false;

//  @HostListener('window:scroll', ['$event'])
//   checkScroll() {
//     const componentPosition = this.el.nativeElement.offsetTop
//     const scrollPosition = window.pageYOffset
//     if (scrollPosition >= componentPosition - 650) {
//       console.log(11111)
//       this.isScrollInto = true;
//     } else {
//       this.isScrollInto = false;
//     }

//   }
}
