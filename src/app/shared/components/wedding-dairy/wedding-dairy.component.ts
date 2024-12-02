import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, PLATFORM_ID, QueryList, ViewChild, ViewChildren, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval, take, tap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-wedding-dairy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wedding-dairy.component.html',
  styleUrl: './wedding-dairy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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

 selectedIndex = 0;
  @ViewChild('carousel') carousel!:ElementRef;
  @ViewChildren('carousel__cell') cells!:QueryList<ElementRef>
  cellWidth = 0;
  cellHeight = 0;
  isHorizontal:boolean = true;
  rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
  radius = 0;
  theta = 0;

  activeSlideIndex = signal<number>(0);
  activeSlideIndex$ = toObservable(this.activeSlideIndex);
  numbers = interval(15000);
  isBrowser = signal(false);

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId));
  }

//  @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const componentPosition = this.el.nativeElement.offsetTop
  //   const scrollPosition = window.pageYOffset
  //   if (scrollPosition >= componentPosition - 450) {
  //     console.log(11111)
  //     this.isScrollInto = true;
  //   } else {
  //     this.isScrollInto = false;
  //   }

  // }

  ngOnInit() {
    if (this.isBrowser()) {
      interval(5000).pipe(
        tap(() => {
          this.next();
        })
      )
        .subscribe()
      // setTimeout(() => {
      //   this.next();
      // },5000)
    }
  }

  getStyle(index:number)
  {
    if (!this.cellCount)
       return null;
    const angle=(index-this.selectedIndex)*2*Math.PI/this.cellCount
    const scale=((75)+25*Math.cos(angle))/100

    return {
      left:-75+150*Math.sin(angle)+'px',
      transform:'scale('+scale+')',
      position:'absolute',
      "z-index":Math.floor(100*scale)
    }
  }
  get cellCount()
  {
    return this.cells?this.cells.length:0;
  }
  // console.log( cellWidth, cellHeight );

  prev()
  {
    this.selectedIndex--;
    this.rotateCarousel();
  }
  next()
  {
    this.selectedIndex++;
    this.rotateCarousel();
  }

  initCarousel() {
    this.theta = 360 / this.cellCount;
    const cellSize = this.isHorizontal ? this.cellWidth : this.cellHeight;
    this.radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / this.cellCount ) );
    this.cells.forEach((cell:ElementRef,i:number)=>
    {
       if (i<this.cellCount)
       {
           cell.nativeElement.style.opacity=1
           const cellAngle=this.theta*i;
           cell.nativeElement.style.transform = this.rotateFn + '(' + cellAngle + 'deg) translateZ(' + this.radius + 'px)';
       }
       else
       {
        cell.nativeElement.style.opacity = 0;
        cell.nativeElement.style.transform = 'none';

       }
    })
    this.rotateCarousel();
  }

  orientationChange()
  {
    this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
    this.initCarousel()
  }

  rotateCarousel() {
    const angle = this.selectedIndex / this.cellCount * -360;
    this.carousel.nativeElement.style.transform = 'translateZ(-288px)'+this.rotateFn+'(' + angle + 'deg)';
  }
  
  ngAfterViewInit()
  {
    this.cellWidth = this.carousel.nativeElement.offsetWidth;
    this.cellHeight = this.carousel.nativeElement.offsetHeight;
    this.initCarousel()
  }
}
