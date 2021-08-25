import { Component, OnInit } from '@angular/core';
import { BannerService } from '@services/banner.service';
import { Banner } from '../../interfaces/banner.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],

})
export class BannerComponent implements OnInit {

  
  product!: Banner;
  //If the banner is from plan or for cellphone
  isPlan: boolean = false;
  //classCss has the banner background image
  classCss: string = "isPlan";

  showBanner: boolean = false;
  bgDefault = "assets/imgs/bg-banner.jpg";



  //Service injection in our constructor
  constructor(private bannerService: BannerService) {

    //we call our service
    this.bannerService.getBannerInfo().subscribe(resp => {
      this.product = resp;
      this.showBanner = this.product.product.show;
      if (this.product.product.type == 'plan') {
        this.isPlan = true;

      }
     
    }, (err) => {
   
      //if we have an error, the banner will not be displayed
      this.showBanner=false;
    });



  }

  //This method open the product.link in another window  when the button is clicked
  goToLink() {
    window.open(this.product.product.link, "_blank");
  }
  ngOnInit(): void {
    

  }

}
