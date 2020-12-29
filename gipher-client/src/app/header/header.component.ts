// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../data.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {

//   constructor(private ds : DataService,private router:Router) { }
//   text : string;
//   result : any= [];
//   state : boolean ;
//   isGif : boolean;
  

//   isSticker : boolean;
//   type : string;
//   ngOnInit(): void {
//     this.state = false;
//     this.isGif = true;
//     this.isSticker = false;
   
//   }

//   getdata(){
//     this.state = true;
    
//     if(this.type == "Gifs"){
//       this.isGif = true;
//       this.isSticker = false;
//       this.ds.getSearchedGifs(this.text).subscribe(res=> {
//         console.log(res);
//         this.result = res["data"];
//         this.router.navigate(['/search'])
//       });
//     }
//     else if(this.type = "Stickers"){
//       this.isGif = false;
//     this.isSticker = true;
//       this.ds.getSearchedStickers(this.text).subscribe(data => {
//         console.log(data);
//         this.result = data["data"];
//         this.router.navigate(['/search'])
//       })
//     }
    
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ds : DataService,private router:Router,private rs:RouterService) { }
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
  username: string;
  ngOnInit(): void {
    this.state = false;
    this.isGif = true;
    this.isSticker = false;
    this.istrend = false;
    this.isLogged = this.getUser();
    this.username = this.getUsername();
  }
  getUser(){
    if(sessionStorage.getItem('username') !== null){
      return true;

    }else{
      return false;
    }
  }

  getUsername(){
    if(sessionStorage.getItem('username') !== null){
      return sessionStorage.getItem('username');

    }else{
      return null;
    }
  }

  getdata(){
    this.state = true;
    
    if(this.type == "Gifs"){
      this.isGif = true;
      this.isSticker = false;
      this.istrend = false;
      this.ds.getSearchedGifs(this.text).subscribe(res=> {
        console.log(res);
        this.result = res["data"];
        this.router.navigate(['/search'])
      });
    }
    else if(this.type = "Stickers"){
      this.isGif = false;
    this.isSticker = true;
    this.istrend = false;
      this.ds.getSearchedStickers(this.text).subscribe(data => {
        console.log(data);
        this.result = data["data"];
        this.router.navigate(['/search'])
      })
    }
    
  }

  trenddata() {
    this.state = false ;
    this.istrend = true ;
    this.router.navigate(['/dashboard'])
  }
  toFav(item){
    this.toggleFav = !this.toggleFav;
    
    this.rs.routeToFavourite();
  }
}

