import  {MatInputModule} from '@angular/material/input';
import  {MatPaginatorModule} from '@angular/material/paginator';
import  {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import  {MatSortModule} from '@angular/material/sort';
import  {MatTableModule} from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {APP_BASE_HREF} from '@angular/common';

import { LiveSearchService } from './live-search.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, HttpClientModule
  ],
  providers: [LiveSearchService,{provide: APP_BASE_HREF, useValue: '/my/app'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
