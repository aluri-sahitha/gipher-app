import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 

  username:string = "";
  email:string = "";
  constructor() { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.email = sessionStorage.getItem('email');
    console.log(this.username);
    console.log(this.email);
  }


}
