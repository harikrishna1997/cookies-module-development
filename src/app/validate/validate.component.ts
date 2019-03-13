import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {
  private jsObj :any = {
    boolean_value: 'true'
  };
  constructor(private service: ServiceService,private http: HttpClient) { }

  ngOnInit() {
    this.service.getService({responseType: 'text'})
    .subscribe((response) => {
      if(response)  
     {
      this. jsObj = JSON.parse(response);
  
     }
     });
     
  }
}
