import { Component, OnInit } from '@angular/core';
import { LiveSearchService } from './live-search.service';
import { HttpClient, HttpEvent, HttpRequest, HttpInterceptor, HttpHandler, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Countries : any;
   sortedCountires: any;
  constructor(public searchApi: LiveSearchService,private http: HttpClient) { }

  ngOnInit() {
      this.searchApi.searchLocation().subscribe((data:any)=>{
         console.log(data.Countries);
         this.Countries = data.Countries;

         this.sortedCountires = this.Countries.sort((a:any, b: any) => (a.TotalConfirmed > b.TotalConfirmed ? -1 : 1));
         this.sortedCountires = this.sortedCountires.slice(0,10);
         
      });
      
  }
 
}
  