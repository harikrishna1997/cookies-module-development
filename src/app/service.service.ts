import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  size:number=2;

private getURL:string="http://localhost:8080/validate";
private postURL:string="https://6386b0f8.ngrok.io/add";
private getDataURL:string="./assets/mydata.json";
private cookieURL:string="http://10.12.10.134:8080/cookies"
  ipDetails: any;
constructor(private http: HttpClient) { }
public getService(Mparam) {
  var a="http://10.12.10.134:8080/cookies/"
console.log(a)
  return this.http.get(a,{params:Mparam});
}

public postservice(postURL,data)
{
  return this.http.post(postURL,data)
}
public  getJSON(): Observable<any> 
{
  return this.http.get(this.getDataURL);
}

}
// this.cookieURL,{params:Mparam}