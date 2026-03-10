import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';


@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

// getData(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/data`);
//   }

//   saveData(data: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/data`, data);
//   }



  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data`).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError(() => new Error('Failed to fetch data. Please try again later.'));
      })
    );
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/data`, data);
  }
  
}
