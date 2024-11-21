import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationService } from './utils/pagination/pagination.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    PaginationService
  ],
  exports: [
  ]
})
export class SharedModule { }
