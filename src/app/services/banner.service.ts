import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Banner } from '../interfaces/banner.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private _apiUrl: string = 'https://hack.kunderlabs.com/exam/telecom/api/products/new'

  constructor(private http: HttpClient) { }

  getBannerInfo(): Observable<Banner> {

    //This get return a Observable type Banner, this banner include a product.
    return this.http.get<Banner>(this._apiUrl);
  }
}