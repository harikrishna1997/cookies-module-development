import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
public websites()
{
  this.router.navigate([`/websites`]);
}
public cookiebanner()
{
  this.router.navigate([`/cookiebanner`]);

}
}
