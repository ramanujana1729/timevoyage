import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  constructor(private http: HttpClient) { }

  private eventsUrl = 'assets/events.json';


  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.eventsUrl);
  }

  

}
