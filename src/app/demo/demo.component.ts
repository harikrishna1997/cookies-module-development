import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PopupModule, Popup} from 'ng2-opd-popup';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import {ServiceService} from '../service.service'

import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public show:boolean=false;
  form:FormGroup;
  submitted=false;
  loading=false;
  isDisabled1=true;
  isDisabled2=true;
  isChecked:boolean=false;
  WebsiteName: any;
  public hitCancel:boolean=false;
  
  constructor(private popup:Popup,private formbuilder:FormBuilder, private http: HttpClient,private router: Router,private service: ServiceService){}
 
  checkEmpty() {
     if (this.WebsiteName)
        this.isDisabled2=false;
}
cancelButton()
{
   this.hitCancel=true;
   this.popup.hide();
   console.log("cancel")
  //  this.router.navigate(['/websites']);
}
register(){
  let options={
    headers: new HttpHeaders().set('Content-Type', 'application/JSON')
  };
}
onSubmit = function (user: any) {
  console.log(user);
 // var obj = JSON.parse(user);
  //console.log(obj);
  // this.http.post("http://192.168.43.70:8080/cookies", user).subscribe((resp:any)=>{
  //   console.log(resp);
  // });
  
  //this.http.post('http://localhost:4200', user);
}
  ToggleButton1(){
     this.isChecked=!(this.isChecked);
     console.log(this.isChecked);
     if(this.isChecked==true)
       this.isDisabled1=false;
     if(this.isChecked==false)
       this.isDisabled1=true;
   }
   toggle(){
     this.show=!this.show;
   }
    ClickButton(){
      this.popup.options={
        header:"Add Website",
        showButtons: false,
      }
      this.popup.show();
      this.popup.show(this.popup.options);
    }
  ngOnInit(){
    this.register();
    var h:boolean;
    if(this.isChecked==true)
       h=true;
     else
       h=false;
       console.log(h);
    this.form=this.formbuilder.group({
      domain: ['', Validators.required],
      //org: ['', Validators.required],
      pages:[ Validators.required]
    });
    
  }


}