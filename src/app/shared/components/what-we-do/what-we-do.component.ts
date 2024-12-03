import { Component, Inject, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SafePipe } from '../../../features/home/sate.pipe';
import { ActivatedRoute, Params } from '@angular/router';

interface WeddingAddressInfo {
  street: string;
  num: string;
  city: string;
  title: string;
  left: number;
}

@Component({
  selector: 'app-what-we-do',
  standalone: true,
  imports: [CommonModule, SafePipe],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.scss'
})
export class WhatWeDoComponent implements OnInit {

  mapsHomeURL = signal<string>('');
  mapsRestaurantURL = signal<string>('');
  weddingAddressInfo = signal<{home: WeddingAddressInfo, restaurant: WeddingAddressInfo} | null>(null)
  isBrowser = signal(false);
  #route = inject(ActivatedRoute);
  queryParams: Params = {
    place: ''
  };
  
  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId));
    this.weddingAddressInfo.set(this.data.groom);
  }

  data = {
    groom: {
      home: {
        street: "195/2 Hương Lộ 45",
        num: "",
        city: "Diên Phú",
        title: "Hẻm nhà mình nè",
        left: 50,
      },
      restaurant: {
        street: "Trung Tâm Tiệc Cưới Phúc Thịnh An",
        num: "đường 23/10",
        city: "Diên Khánh",
        title: "Nhà hàng quẩy banh nóc nè",
        left: 35,
      }
    },
    bride: {
      home: {
        street: "Siêu thị Bách Hoá XANH Phường 5",
        num: "tờ bản đồ số 10, Khóm 2",
        city: "Vĩnh Long",
        title: "Hẻm nhà mình đối diện BHX nè",
        left: 65,
      },
      restaurant: {
        street: "Nhà Hàng Đức Phát Hoàng Gia",
        num: "66/8D Phạm Thái Bường",
        city: "Vĩnh Long",
        title: "Nhà hàng quẩy banh nóc nè",
        left: 35,
      }
    }
  }
  
  ngOnInit(): void {
    if (this.isBrowser()) {
      this.queryParams = this.#route?.snapshot?.queryParams || {};
    
      if (this.queryParams['place'] === 'b') {
        this.weddingAddressInfo.set(this.data.bride);
      }

      const homeAddress = this.weddingAddressInfo()?.home;
      const restaurantAddress = this.weddingAddressInfo()?.restaurant;
      this.mapsHomeURL.set(`https://maps.google.com/maps?q=${homeAddress?.street}%20${homeAddress?.num}%20%${homeAddress?.city}&t=&z=20&ie=UTF8&iwloc=&output=embed`);
      this.mapsRestaurantURL.set(`https://maps.google.com/maps?q=${restaurantAddress?.street}%20${restaurantAddress?.num}%20%${restaurantAddress?.city}&t=&z=20&ie=UTF8&iwloc=&output=embed`);
    }
  }
}
