import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpInterceptor,
     HttpHandler, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Injectable({
  providedIn: 'root'
})

export class LiveSearchService {
 

  constructor(private httpClient: HttpClient) { }

  searchLocation(){
    return this.httpClient.get("https://api.covid19api.com/summary")}
}