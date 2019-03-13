import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})

export class CountryComponent implements OnInit {

  constructor(private service: ServiceService,private http: HttpClient,private router:Router) { 
    
  }
  
  dropdownList =[];
  selectedItems = [];
  dropdownSettings = {};
  
  ngOnInit() {
    this.service.getJSON().subscribe(res => {
      if(res){
      this.dropdownList = res
    }   
    });
  
    console.log(this.dropdownList)
    this.dropdownSettings = {
      singleSelection: false,
      textField: 'country_name',
      idField:'country_code',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }
  send()
  {
    this.service.postservice(this.selectedItems)
    .subscribe((res) => {
      this.validate();
     });
    
  }
  
  onItemSelect(item: any){console.log(item)}
  
  onSelectAll(items: any){}
  OnItemDeSelect(item:any){}
  onDeSelectAll(items: any){}
   
validate()
{
  this.router.navigate([`/validate` ]);

}
}
