import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID, Signal, signal} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {toObservable} from "@angular/core/rxjs-interop";
import {interval, tap} from "rxjs";
import { NgOptimizedImage } from '@angular/common'


@Component({
  selector: 'app-slide-image',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NgOptimizedImage],
  templateUrl: './slide-image.component.html',
  styleUrl: './slide-image.component.scss'
})
export class SlideImageComponent implements OnInit {

  slideData = [
    {
      style: {'background-image': 'url(/phuctram-wedding/browser/assets/params/images/wedding/phuctram-bg-white-1.jpg)'},
      slideTitle: 'Dream Wedding',
      slideDesc: 'We Make Your Wedding Dreams Come',
      slideSubDesc: `We believe that it is all about the <span class="slide-signature">big dreams</span> and the small details! Nullam vestibulum iaculis maximus.`,
    },
    // {
    //   style: {'background-image': 'url(/phuctram-wedding/browser/assets/params/images/wedding/phuctram-bg-white-5.jpeg)'},
    //   slideTitle: 'Dream Wedding',
    //   slideDesc: 'We Make Your Wedding Dreams Come',
    //   slideSubDesc: `We believe that it is all about the <span class="slide-signature">big dreams</span> and the small details! Nullam vestibulum iaculis maximus.`,
    // },
    // {
    //   style: {'background-image': 'url(/phuctram-wedding/browser/assets/params/images/wedding/phuctram-bg-white-7.jpeg)'},
    //   slideTitle: 'Dream Wedding',
    //   slideDesc: 'We Make Your Wedding Dreams Come',
    //   slideSubDesc: `We believe that it is all about the <span class="slide-signature">big dreams</span> and the small details! Nullam vestibulum iaculis maximus.`,
    // }
  ];
  activeSlideIndex = signal<number>(0);
  activeSlideIndex$ = toObservable(this.activeSlideIndex);
  numbers = interval(15000);
  isBrowser = signal(false);

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId));
  }

  ngOnInit() {
    if (this.isBrowser()) {
      interval(5000).pipe(
        tap(() => {
          this.next();
        })
      )
        .subscribe()
    }
  }

  prev() {
    if (this.activeSlideIndex() === 0) {
      this.activeSlideIndex.update(() => {
        return this.slideData.length - 1
      })

      return;
    }

    this.activeSlideIndex.update(prev => {
      return prev - 1
    })
  }

  // TODO #2: when next is clicked on last images
  // restart from first
  next() {
    if (this.activeSlideIndex() === (this.slideData.length - 1)) {
      this.activeSlideIndex.update(() => {
        return 0;
      })

      return;
    }
    this.activeSlideIndex.update(prev => {
      return prev + 1
    })
  }
}
