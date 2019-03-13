import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-initiate',
  templateUrl: './initiate.component.html',
  styleUrls: ['./initiate.component.scss']
})
export class InitiateComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
initiate()
{
  this.router.navigate(['/CountryList'])
}
decline()
{

}
}
