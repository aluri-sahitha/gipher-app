import { Component, OnInit,OnChanges,Input} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // @Input() message:any[];
  // @Input() isGif:boolean;
  // @Input() isSticker:boolean;
  p:any;
  public x:any;
  recommendedGifList : any[]
  favoriteGifList: any[];
  getRecItem: any;
  text : string;
  result : any= [];
  state : boolean ;
  isGif : boolean;
  istrend : boolean;
  isLogged :boolean;
  toggleFav: boolean = false;
  isSticker : boolean;
  type : string;
  item;

  constructor(private dataService: DataService,private router: Router) { }
  downloadGif(url: string){
    this.dataService.getImage(url)
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

  downloadSticker(url: string){
    this.dataService.getImage(url)
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
  ngOnInit(): void {
    this.recommendedGifList = JSON.parse(localStorage.getItem('recommended_gifs') || '[]');
    // console.log("local storage is : " + this.recommendedGifList);
    this.favoriteGifList = JSON.parse(localStorage.getItem('favorite_gifs') || '[]');
console.log( this.isGif);
console.log(this.isSticker)
  }

  
  recommendGifs(item:any){
    // if(!this.containsObject(item, this.recommendedGifList)){
    //   this.recommendedGifList.push(item);
    //   localStorage.setItem('recommended_gifs', JSON.stringify(this.recommendedGifList));
    // }
    var RecItem = {
     "recommend":"true",
     "url": item.images.original.url,
     "id" : item.id,
     "count" : 1
    }
    this.dataService.getRecommendationsById(RecItem.id).subscribe(data => {
      console.log(data);
      this.getRecItem = data.length > 0 ? data[0] : null;
      if(this.getRecItem == null){
      
        this.dataService.addToRecommendations(RecItem);
      }
      else{
        this.dataService.removeRecommendation(RecItem);
        this.getRecItem.count += 1;
        this.dataService.addToRecommendations(this.getRecItem);
      }
    })
    
  }

  // favoriteGifs(item:any){
  //   if(!this.containsObject(item, this.favoriteGifList)){
  //     this.favoriteGifList.push(item);
  //     localStorage.setItem('favorite_gifs', JSON.stringify(this.favoriteGifList));
  //   }
  // }

  containsObject(obj: any, list:any[]) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].hasOwnProperty("id") && list[i].id === obj.id) {
            return true;
        }
    }
    return false;
  }

  
  goToComments(item){
    console.log('item in goto:' + item);
    this.router.navigate(['/gifdetails'], {state: {data: {cur_url : item}}});
  }

 ngOnDestroy(){
   console.log("this is destroy")
 }
  
 getdata(){
  this.state = true;
  
  if(this.type == "Gifs"){
    this.isGif = true;
    this.isSticker = false;
    this.istrend = false;
    this.dataService.getSearchedGifs(this.text).subscribe(res=> {
      console.log(res);
      this.result = res["data"];
      // this.router.navigate(['/search'])
    });
  }
  else if(this.type = "Stickers"){
    this.isGif = false;
  this.isSticker = true;
  this.istrend = false;
    this.dataService.getSearchedStickers(this.text).subscribe(data => {
      console.log(data);
      this.result = data["data"];
      // this.router.navigate(['/search'])
    })
  }
  

 
}
favoriteGifs(value){
  this.toggleFav = !this.toggleFav;
  this.dataService.addToFav(value);
  // this.rs.routeToFavourite();
}


}
