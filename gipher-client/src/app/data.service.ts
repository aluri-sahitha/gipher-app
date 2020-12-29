import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favourite } from './favourite';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { RouterService } from './router.service';
import { Recommend } from './recommend';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 userKey : string = "4unc177S7asTXqYHJ1rRusbJqV3QMFgP";
 favs : Favourite[] =[];
 subjectFav : BehaviorSubject<Favourite[]> =  new BehaviorSubject(this.favs);
 recoms : Recommend[] = [];
 subject : BehaviorSubject<Recommend[]> =  new BehaviorSubject(this.recoms);
  gif: any;

 constructor(private http: HttpClient,private rs: RouterService) { }
  headers = new HttpHeaders({
    "accept" : "application/json",
    "userKey" : this.userKey
  })
  getSearchedGifs(query : string) {

    
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=4unc177S7asTXqYHJ1rRusbJqV3QMFgP&q=${query}&limit=100&offset=0&rating=g&lang=en`);
  }

  getSearchedStickers(query : string){
    return this.http.get(`https://api.giphy.com/v1/stickers/search?api_key=4unc177S7asTXqYHJ1rRusbJqV3QMFgP&q=${query}&limit=100&offset=0&rating=g&lang=en`);
  }
  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  getMyFavourite(){
    this.http.get<Array<Favourite>>(`http://localhost:9091/addtoyourFavourite/getFavourite/${sessionStorage.getItem('email')}`)
    .subscribe(data => {
      this.favs = data;
      this.subjectFav.next(this.favs);
    });
    return this.subjectFav;
  }
addToFav(item: any){
  //return this._http.post<any>("http://localhost:8011/login", user,  { observe: 'response'})
  var fav = {
    "username": `${sessionStorage.getItem('email')}`,
    "title": item.title,
    "id": item.id,
    "url": item.images.original.url
    //"url":"https://giphy.com/stickers/DrSeuss-dr-seuss-how-the-grinch-stole-christmas-drseuss-0DM1u3qti5VIv0R2is"
}
  this.http.post<Array<Favourite>>("http://localhost:9091/addtoyourFavourite/saveFavourite", fav).subscribe(res => console.log(res));
    
}


removeFavourite(a: Favourite){
  this.http.post("http://localhost:9091/addtoyourFavourite/removeFavourite",a).subscribe(data => {
  console.log(data);
 })
}
getRecommendations(){
  this.http.get<Array<Recommend>>(`http://localhost:8083/addrecommend/getRecommends`).subscribe(data => {
    this.recoms = data;
    this.subject.next(this.recoms);
  });
  return this.subject;
}


getRecommendationsById(itemId){
  return this.http.get<Array<Recommend>>(`http://localhost:8083/addrecommend/getRecommends/${itemId}`);

  
   
 
}

addToRecommendations(gif){
  
  

  this.http.post(`http://localhost:8083/addrecommend/saveRecommend`,gif).toPromise().then(data => {
    console.log(data);
  })
  // this.rs.routeToDashboard();
}
removeRecommendation(RecItem) {
  this.http.post(`http://localhost:8083/addrecommend/removeFavourite`,RecItem).toPromise().then(data => {
    console.log(data);
  })
}
}
