import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { GipherService } from '../gipher.service';
import { Recommend } from '../recommend';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  gifs : any = [];
  stickers : any = [];
  name;
  error;
  results: any[];
  totalRecords: string;
  page:Number=1;
  imageToShow: any;
  // recommendedGifsList: any[] = [];
  // favoriteGifsList: any[] = [];
  recommendedGifList : any[]
  favoriteGifList: any[];
  toggleFav;
  //   totalRecords: string;
  //   page:Number=1;
  recoms: Recommend[];
  constructor(private gipherService: GipherService, private ds: DataService, private router: Router,private rs:RouterService){ }
 
 ngOnInit() {
  //  localStorage.clear();
   console.log("this is app component")
   this.destroyMe();
   this.trendStickers();
  this.getRecommend();
  //  console.log("in recommend page");
  //  this.recommendedGifList = JSON.parse(localStorage.getItem('recommended_gifs') || '[]');
  //  console.log("local storage is : " + this.recommendedGifList);
  //  this.favoriteGifList = JSON.parse(localStorage.getItem('favorite_gifs') || '[]');
 }
 destroyMe() {
   this.gipherService.getTrendingGifs(this.name) 
   .subscribe((data: any) => {
     console.log(data);
     this.gifs = data;
     console.log(data);
   })
 }
  trendStickers(){
    this.gipherService.getTrendingStickers(this.name).subscribe((data: any) => {
      console.log(data);
      this.stickers = data;
      console.log(data);
    })
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

  downloadGif(url: string){
    this.gipherService.getImage(url)
      .subscribe((data: any) => {
        console.log(data);
        var downloadURL = window.URL.createObjectURL(data);
        var link = document.createElement('a');
        link.href = downloadURL;
        let CharsString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        let length = 5;
        let name = this.makeRandom(length, CharsString)
        link.download = name + ".gif";
        link.click();
      })
  }

  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }
  goToComments(item){
    console.log('item in goto:' + item);
    this.router.navigate(['/gifdetails'], {state: {data: {cur_url : item}}});
  }

 ngOnDestroy(){
   console.log("this is destroy")
 }

 toFav(item){
  this.toggleFav = !this.toggleFav;
  this.ds.addToFav(item);
  // this.rs.routeToFavourite();
}

getRecommend(){
  this.ds.getRecommendations().subscribe(data => {
    console.log(data);
    this.recommendedGifList = data;

  })
}
}
