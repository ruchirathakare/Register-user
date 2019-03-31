import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class ApiService {
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
  };
  constructor(private http:HttpClient) { }
  
  registerUser(data):Observable<any>{
    console.log(data);
   return this.http.post<any>("https://jsonplaceholder.typicode.com/users", data, this.httpOptions);
  }
}