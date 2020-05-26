import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Unsplashresponse{
  urls: {
    small: string;
  };
}
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }
  getPhoto(){
    return this.http.get<Unsplashresponse>('https://api.unsplash.com//photos/random', {
      headers: {
        Authorization: 'Client-ID f-IMxM-PSZlGtCcmej_Gf2HNFdiX27RgCKPwMeKUN7A'
      }
    });
  }
}
