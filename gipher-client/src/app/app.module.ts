import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { GipherService } from './gipher.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes} from '@angular/router';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { DataService } from './data.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrendingComponent } from './trending/trending.component';
import { CommentComponent } from './comment/comment.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CommentboxComponent } from './commentbox/commentbox.component';

import { DatacontainerDirective } from './comment/comment.component';
import { CommonModule } from '@angular/common';
import { ChildboxComponent } from './childbox/childbox.component';
import { MaincommentComponent } from './maincomment/maincomment.component';
import { GifdetailsComponent } from './gifdetails/gifdetails.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import { AuthenticationService } from './authentication.service';

import { RouterService } from './router.service';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouteService } from './route.service';


const routes : Routes =[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 {
   path:'dashboard',
   component:DashboardComponent,
 },
 
  {
    path:'login',
    component:LoginComponent

  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path:'recommendation',
    component:RecommendationComponent,
  },
 
  {
    path:'favourite',
    component:FavoriteComponent,
  },
  {
    path:'search',
    component:SearchComponent,
  },
  {
    path:'trending',
    component:TrendingComponent
  },
  {
    path:'comment',
    component:CommentComponent
  },
  
  {
path:'commentbox',
component:CommentboxComponent
  },
  {
    path:'maincomment',
    component:MaincommentComponent
  },
  {
    path:'gifdetails',
    component:GifdetailsComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecommendationComponent,
    FavoriteComponent,
   
    PageNotFoundComponent,
    TrendingComponent,
    CommentComponent,
   
    CommentboxComponent,
   
    DatacontainerDirective,
   
    ChildboxComponent,
   
    MaincommentComponent,
   
    GifdetailsComponent,
   
    SearchComponent,
   
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    ProfileComponent,
    LogoutComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule,
    FormsModule,ReactiveFormsModule,
    // MatIconModule,
    RouterModule.forRoot(routes)
  ],
  
  providers: [GipherService,DataService,AuthenticationService,RegistrationComponent,RouterService,RouteService],
  // providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
