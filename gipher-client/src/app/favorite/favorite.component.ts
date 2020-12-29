import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Favourite } from '../favourite';
import { RouteService } from '../route.service';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
 
  favoriteGifList : any[]
  
  // // totalRecords: string;
  // // page:Number=1;
  // constructor(private ns:DataService, private rs : RouteService, private rgs : RouterService) { }

  // ngOnInit(): void {
  //   // localStorage.clear();
  //   console.log("in recommend page");
  //   this.favoriteGifList = JSON.parse(localStorage.getItem('favorite_gifs') || '[]');
  //   console.log("local storage is : " + this.favoriteGifList);
  // }
  // unfavoriteGifs(item){
    
  //   this.favoriteGifList = this.favoriteGifList.filter(x => x != item );
  //   localStorage.setItem('favorite_gifs', JSON.stringify(this.favoriteGifList));
  // }

  // containsObject(obj: any, list:any[]) {
  //   for (let i = 0; i < list.length; i++) {
  //       if (list[i].hasOwnProperty("id") && list[i].id === obj.id) {
  //           return true;
  //       }
  //   }
  //   return false;
  // }
  bool:boolean;
  totalRecords:number
  page:number =1
  
  var:Favourite;
  gif:Array<Favourite>=[];
  id:number[] = [];
constructor(private http: HttpClient,private ns:DataService, private rs : RouteService, private rgs : RouterService) { }


  ngOnInit(): void {
   
    this.myFav();
    this.bool = false;
  }

  // ngOnChanges(): void{
  //   if(sessionStorage.getItem('username') !== null){
  //     this.http.post(`http://localhost:8092//addfavourite/saveFavourite`,this.fav);
  //   }
  // }
  myFav(){
    this.ns.getMyFavourite().subscribe(data => {
      console.log(data);
      this.gif = data;
      console.log(this.gif);
    })   
 }
 removeFavourite(a: Favourite){
  this.ns.removeFavourite(a);
  this.myFav();
 }
//  this.ns.getMyMeal().subscribe(data =>{
  //  this.meals = data;
//  })
 

//  showDetail(a : Favourite){
//   this.var = a;
  
//   this.bool= true;
//   this.rs.favdetails.next(a);
//   this.rgs.routeToFavDeatails();
  
//  }

}
