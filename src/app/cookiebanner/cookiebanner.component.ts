import { Component, OnInit } from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-cookiebanner',
  templateUrl: './cookiebanner.component.html',
  styleUrls: ['./cookiebanner.component.scss']
})
export class CookiebannerComponent implements OnInit {
  public style={
   'margin-top':'0px',
   'margin-left':'50px'
  }
  public textColor:string="black";
  public buttonColor:string;
  public backgroundColor:string;
  public isCollapsed1:Boolean=true;
  public isCollapsed2:Boolean=true;
  public isCollapsed3:Boolean=true;
  public contentHeading:string="";
  public policyLink:String="";
  public content:string="We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners.";
  public val:String;
  constructor() { }

  ngOnInit() {
   
 
  }
  toggleCollapse(val)
  {
    if(val=="layout")
    {
      this.isCollapsed2=true;
      this.isCollapsed3=true;
      this.isCollapsed1=!this.isCollapsed1;

    }
    if(val=="colors")
    {
      this.isCollapsed1=true;
      this.isCollapsed3=true;
      this.isCollapsed2=!this.isCollapsed2;
    
    }
    if(val=="content")
    {
      this.isCollapsed1=true;
        this.isCollapsed1=true;
      this.isCollapsed3=!this.isCollapsed3;

    }
    // this.isCollapsed=!this.isCollapsed;
  }
   fetchForbutton()
{
  
  var get = (<HTMLInputElement>document.getElementById('buttonInput')).value;
   (<HTMLInputElement>document.getElementById("buttonText")).value = get;
   this.buttonColor=get;
}
fetchForbackground()
{
  var get = (<HTMLInputElement>document.getElementById('backgroundInput')).value;
  (<HTMLInputElement>document.getElementById("backgroundText")).value = get;
  this.backgroundColor=get;

}
fetchFortext()
{
  var get = (<HTMLInputElement>document.getElementById('textInput')).value;
  (<HTMLInputElement>document.getElementById("textText")).value = get;
  this.textColor=get;
}
contentSave()
{
  var contentHeading = (<HTMLInputElement>document.getElementById('contentHeading')).value;
  var content = (<HTMLInputElement>document.getElementById('content')).value;
  var policyLink = (<HTMLInputElement>document.getElementById('policyLink')).value;
  (<HTMLInputElement>document.getElementById('words')).value =content;
  console.log(content )
}
public bottom_Bar_dark_theme(){
  this.style["margin-top"]='230px';
  this.style["margin-left"]='50px';
  this.textColor='black';
  
}
public top_Bar_dark_theme(){
  this.style["margin-top"]='0px';
  this.style["margin-left"]='50px';
  this.textColor='black';

}
public bottom_Bar_light_theme(){
  this.style["margin-top"]='230px';
  this.style["margin-left"]='50px';
  this.textColor='white';

}
public top_Bar_light_theme(){
  this.style["margin-top"]='0px';
  this.style["margin-left"]='50px';
  this.textColor='white';
}
}
