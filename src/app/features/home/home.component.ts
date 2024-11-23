import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { environment } from '../../../environments/environment';

import { SeoService } from '../../core/services/seo/seo.service';
import {SlideImageComponent} from "../../shared/components/slide-image/slide-image.component";
import {WhatWeDoComponent} from "../../shared/components/what-we-do/what-we-do.component";
import {IntroduceCoupleComponent} from "../../shared/components/introduce-couple/introduce-couple.component";
import {WeddingEventComponent} from "../../shared/components/wedding-event/wedding-event.component";
import {WeddingGalleryComponent} from "../../shared/components/wedding-gallery/wedding-gallery.component";
import {WeddingDairyComponent} from "../../shared/components/wedding-dairy/wedding-dairy.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    SlideImageComponent,
    WhatWeDoComponent,
    IntroduceCoupleComponent,
    WeddingEventComponent,
    WeddingGalleryComponent,
    WeddingDairyComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private seoService: SeoService) {

    // const content =
    //   'This application was developed with ' + this.angular + ' and ' + this.bootstrap +
    //   ' It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = `PhucTram's wedding`;

    // this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }


}
