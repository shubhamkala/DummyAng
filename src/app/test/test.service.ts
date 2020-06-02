import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _url: string = 'assets/DATA/employees.json';
  constructor(private http: HttpClient) { }

  private empData = [
    {"name":"jolly","age":30,"sal":50000},
    {"name":"polly","age":30,"sal":50000},
    {"name":"rolly","age":30,"sal":50000}
  ];

  getEmpData(): Observable<IEmployee[]> {
    console.log("service call to employees.json");
    return this.http.get<IEmployee[]>(this._url);
  }

}
