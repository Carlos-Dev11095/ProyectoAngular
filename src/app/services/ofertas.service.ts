import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {tap} from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http:HttpClient) { }

  getOfertas(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .pipe(tap(console.log));
  }
}
