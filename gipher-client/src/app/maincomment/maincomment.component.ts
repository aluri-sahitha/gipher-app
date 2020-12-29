import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincomment',
  templateUrl: './maincomment.component.html',
  styleUrls: ['./maincomment.component.css']
})
export class MaincommentComponent implements OnInit {

  comments: string;
  count: number;
  constructor() { }


  ngOnInit() {
    this.count = 0;
  }


  receiveComment($event) {
    this.comments = $event;
    this.count = this.comments.length;
    console.log(this.comments.length);
  }


  recieveCount($event) {
    this.comments = $event;
    this.count = this.comments.length;
  }

}
