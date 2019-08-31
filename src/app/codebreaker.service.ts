import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CodebreakerService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json',
    })
  };

  setSecret(number) {
    const uri = `${this.url}/setsecret/${number}`;
    return this.http.get(uri, this.httpOptions).pipe(
      map(response => {
        return response;
      })
    );
  }

  guess(number){
    const uri = `${this.url}/guess/${number}`;
    return this.http.get(uri, this.httpOptions).pipe(
      map(response => {
        return response;
      })
    );
  }
}
