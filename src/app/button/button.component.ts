import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  ip:String="";
  //Ipdetails:any;
  constructor(private service: ServiceService,private route:ActivatedRoute,private router:Router) { }
  ngOnInit() {
  }
  // get()
  // {
  //  this.service.getService()
  //   .subscribe( (response:any) => {
    
  //     if(response){
  //       this.service.ipDetails = response;
  //       this.log();
  //     };
  //   }
  //   , (error) => {
  //     alert('Error connecting to IP API');
  //   }
  //   );
  // }
  
  log()
  {
    this.router.navigate([`/table` ]);
  }
}


