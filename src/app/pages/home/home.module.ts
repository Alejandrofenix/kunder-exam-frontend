import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home.component';
import { BannerComponent } from '../../components/banner/banner.component';


@NgModule({
  imports: [
    HomePageRoutingModule,
    CommonModule      
  ],
  declarations: [HomePageComponent, BannerComponent],
  providers: []
})
export class HomePageModule { }
