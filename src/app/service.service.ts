import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

private getURL:string="http://localhost:8080/validate";
private postURL:string="https://6386b0f8.ngrok.io/add";
private getDataURL:string="./assets/mydata.json";
  ipDetails: any;

constructor(private http: HttpClient) { }

public getService() {
  return this.http.get(this.getURL,{responseType:'text'});
}

public postservice(data)
{
  return this.http.post(this.postURL,data)
}
public  getJSON(): Observable<any> 
{
  return this.http.get(this.getDataURL);
}

}