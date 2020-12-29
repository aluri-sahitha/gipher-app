import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private rs : RegistrationService, private rgs : RouterService) { }

  // ngOnInit(): void {
  //   this.logout();
  // }
  // logout(){
  //   sessionStorage.removeItem('username');
  //   this.router.navigate(['dashboard']);
  // }

  ngOnInit(): void {
    this.rs.logout();
    alert("You Logged Out!");
    this.rgs.routeToDashboard();
  }
}
