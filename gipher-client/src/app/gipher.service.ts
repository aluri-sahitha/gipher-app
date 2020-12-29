import { Injectable } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GipherService {

  constructor(private http: HttpClient) {}
    
   
   getGifs(name) : Observable<any> {
    //  return this.http.get("https://api.giphy.com/v1/gifs/search?api_key=p0k7HtG32ErBJ3T3ehvczPH0AWiVBhs1&q=Young sheldon&limit=25&offset=0&rating=g&lang=en");
     return this.http.get("https://api.giphy.com/v1/gifs/trending?api_key=p0k7HtG32ErBJ3T3ehvczPH0AWiVBhs1&limit=25&rating=g");
    
   }

   getTrendingGifs(name) : Observable<any> {
    return this.http.get("https://api.giphy.com/v1/gifs/trending?api_key=p0k7HtG32ErBJ3T3ehvczPH0AWiVBhs1&limit=25&rating=g");
   
  }
 
  getTrendingStickers(name) : Observable<any> {
    return this.http.get("https://api.giphy.com/v1/stickers/trending?api_key=p0k7HtG32ErBJ3T3ehvczPH0AWiVBhs1&limit=6&rating=pg");
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }
  
  
}
