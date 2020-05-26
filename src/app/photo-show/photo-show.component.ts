import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
photoUrl: string;
  constructor(private photoService: PhotoService) {
    this.fetchPhoto();
  }

  ngOnInit(): void {
  }
  onFtech(){
   this.fetchPhoto();
  }
  fetchPhoto(){
    this.photoService.getPhoto().subscribe((res) => {
       this.photoUrl = res.urls.small;
    });
  }
}
