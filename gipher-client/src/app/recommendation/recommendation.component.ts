import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  recommendedGifList : any[]
  // totalRecords: string;
  // page:Number=1;
  constructor() { }

  ngOnInit(): void {
    console.log("in recommend page");
    this.recommendedGifList = JSON.parse(localStorage.getItem('recommended_gifs') || '[]');
    console.log("local storage is : " + this.recommendedGifList);
  }

}
