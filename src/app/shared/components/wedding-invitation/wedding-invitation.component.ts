import { Component, Inject, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

interface WeddingInfo {
  weddingTitle: string;
  weddingCeremonyTime:  string;
  weddingCeremonyLunarTime: string;
  restaurantTitle: string;
  restaurantName: string;
  weddingHall: string;
  restaurantAddress: string;
  weddingPartyTime: string;
  weddingDayInWeek: string;
  weddingDay: string;
}

@Component({
  selector: 'app-wedding-invitation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wedding-invitation.component.html',
  styleUrl: './wedding-invitation.component.scss'
})
export class WeddingInvitationComponent implements OnInit {
  isBrowser = signal(false);
  #route = inject(ActivatedRoute);
  queryParams: Params = {
    place: ''
  };
  isWeddingAtGroom = signal(true);

  data = {
    groom: {
      weddingDayInWeek: 'THỨ BẢY',
      weddingDay: '21',
      weddingTitle: 'LỄ THÀNH HÔN',
      weddingCeremonyTime: '10 GIỜ 00 | THỨ BẢY | 21.12.2024',
      weddingCeremonyLunarTime: '(Nhằm ngày 21 tháng 11 năm Giáp Thìn)',
      restaurantTitle: 'TRUNG TÂM HỘI NGHỊ TIỆC CƯỚI',
      restaurantName: 'Phúc Thịnh An',
      weddingHall: '(Sảnh Hạnh Phúc)',
      restaurantAddress: 'CÂY SỐ 9, ĐƯỜNG 23/10, DIÊN AN, DIÊN KHÁNH',
      weddingPartyTime: '17 GIỜ 30 | THỨ BẢY | 21.12.2024'
    },
    bride: {
      weddingDayInWeek: 'THỨ HAI',
      weddingDay: '16',
      weddingTitle: 'LỄ VU QUY',
      weddingCeremonyTime: '08 GIỜ 00 | THỨ HAI | 16.12.2024',
      weddingCeremonyLunarTime: '(Nhằm ngày 16 tháng 11 năm Giáp Thìn)',
      restaurantTitle: 'NHÀ HÀNG',
      restaurantName: 'Đức Phát Hoàng Gia',
      weddingHall: '(Sảnh 3)',
      restaurantAddress: '68/8D, ĐƯỜNG PHẠM THÁI BƯỢNG P4, TP VĨNH LONG',
      weddingPartyTime: '11 GIỜ 00 | THỨ HAI | 16.12.2024'
    }
  }
  weddingInfo = signal<WeddingInfo | null>(null);

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId));
    this.weddingInfo.set(this.data.groom);
  }

  ngOnInit(): void {
      if (this.isBrowser()) {
          this.queryParams = this.#route?.snapshot?.queryParams || {};
          this.isWeddingAtGroom.set(this.queryParams['place'] === 'g');
          if (this.queryParams['place'] === 'b') {
            this.weddingInfo.set(this.data.bride);
          }
      }
  }
}
