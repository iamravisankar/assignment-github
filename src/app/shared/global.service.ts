import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class GlobalService {

  REST_API: string = 'https://api.github.com/';

 
  constructor(public http: HttpClient) { }

  apiTest()  {
    return this.http.get(this.REST_API)
  }
}
