import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberComponent } from './member/member.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
