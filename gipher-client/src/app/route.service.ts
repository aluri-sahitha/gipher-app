import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  //variable for search results
  searchResults : any = new BehaviorSubject(null);
  nutriList : any = new BehaviorSubject(null);
  fav : any = new BehaviorSubject(null);
  favdetails: any = new BehaviorSubject(null);
  constructor() { }

}
