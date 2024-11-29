import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wedding-dairy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wedding-dairy.component.html',
  styleUrl: './wedding-dairy.component.scss'
})
export class WeddingDairyComponent {

 data = [
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-15.jpg',
      imgTitle: '21.04.2023',
      layout: 'col-md-4'
    },
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-26.jpg',
      imgTitle: '07.05.2023',
      layout: 'col-md-3'
    },
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-23.jpg',
      imgTitle: '05.06.2023',
      layout: 'col-md-4'
    },
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-10.jpg',
      imgTitle: '12.10.2023',
      layout: 'col-md-3'
    },
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-21.jpg',
      imgTitle: '30.12.2023',
      layout: 'col-md-3'
    },
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-20.jpg',
      imgTitle: '13.01.2024',
      layout: 'col-md-3'
    },
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-18.jpg',
      imgTitle: '18.03.2024',
      layout: 'col-md-4'
    },
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-14.jpg',
      imgTitle: '20.03.2024',
      layout: 'col-md-4'
    },
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-8.jpg',
      imgTitle: '25.05.2024',
      layout: 'col-md-4'
    },
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-9.jpg',
      imgTitle: '25.05.2024',
      layout: 'col-md-4'
    },
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-3.jpg',
      imgTitle: '15.06.2024',
      layout: 'col-md-4'
    },
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-1.jpg',
      imgTitle: '15.08.2024',
      layout: 'col-md-3'
    },
    {
      imgUrl: 'assets/params/images/dairy/phuctram-dairy-27.jpg',
      imgTitle: '15.08.2024',
      layout: 'col-md-4'
    }
 ]

 el = inject(ElementRef)
 isScrollInto = false;

 @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition - 450) {
      console.log(11111)
      this.isScrollInto = true;
    } else {
      this.isScrollInto = false;
    }

  }
}
