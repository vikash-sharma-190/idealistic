import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { AppComponent } from './app.component';
import { LiveChannelComponent } from './live-channel/live-channel.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, LiveChannelComponent, HeaderComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
