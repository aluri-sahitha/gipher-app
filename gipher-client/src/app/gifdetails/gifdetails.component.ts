import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-gifdetails',
  templateUrl: './gifdetails.component.html',
  styleUrls: ['./gifdetails.component.css']
})
export class GifdetailsComponent implements OnInit {
  public state$: Observable<any>;
  public item:any;
  public x:any;
  recommendedGifList: any[] = [];
  favoriteGifList: any[] = [];
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.recommendedGifList = JSON.parse(localStorage.getItem('recommended_gifs') || '[]');
    this.favoriteGifList = JSON.parse(localStorage.getItem('favorite_gifs') || '[]');
    this.state$ = this.route.data
      .pipe(map(() => window.history.state));
      this.state$.subscribe(v => this.item = v.data);
      if(this.item !== undefined){
        localStorage.setItem('lastPayLoad', JSON.stringify(this.item));
      }
      else {
        this.item = JSON.parse(localStorage.getItem('lastPayLoad'));
      }
  }

  recommendGifs(item:any){
    if(!this.containsObject(item, this.recommendedGifList)){
      this.recommendedGifList.push(item);
      localStorage.setItem('recommended_gifs', JSON.stringify(this.recommendedGifList));
    }
  }

  favoriteGifs(item:any){
    if(!this.containsObject(item, this.favoriteGifList)){
      this.favoriteGifList.push(item);
      localStorage.setItem('favorite_gifs', JSON.stringify(this.favoriteGifList));
    }
  }

  containsObject(obj: any, list:any[]) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].hasOwnProperty("id") && list[i].id === obj.id) {
            return true;
        }
    }
    return false;
  }

}
