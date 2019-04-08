import { Component, OnInit } from '@angular/core';
import { ModalDialogService } from 'ngx-modal-dialog';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {ServiceService} from '../service.service'
import { MockWebsiteList } from '../mocks/website-list';
import { IWebsiteItem } from '../interfaces/website-item.interface';
import {DemoComponent} from '../demo/demo.component'
@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})
export class WebsitesComponent implements OnInit {
  private response = MockWebsiteList;
  private websiteList: IWebsiteItem[];
  params:any
  tottalPages:number=10;
  // public myParams = new HttpParams().set("size", "5").set("page", this.newPage);
  p: number = 1;
  collection=[] ; 
  config = {
    currentPage: 0,
    itemsPerPage: 4,
    totalItems: 21,
  };

  constructor(private route: ActivatedRoute, private router: Router,private service: ServiceService) {
    this.route.queryParamMap
    .pipe(map (params => params.get('page')))
      .subscribe(page => this.config.currentPage = Number(page));
    for (let i = 1; i <= 11; i++) {
      this.collection.push(`item ${i}`);
    }

  }
  pageChange(newPage: number) {
    console.log(newPage)
        this.params = {
          size: this.config.itemsPerPage,
          page: (newPage-1)
        }
      this.router.navigate(['/websites'] ,{ queryParams: { page: newPage } });
      console.log(this.params.page)
      this.service.getService(this.params) .subscribe((resp:any) => {
        if(resp)
        {
            this.response=resp;
            this.config.currentPage = resp.number;
            // this.config.totalItems = resp.totalElements;
            
          // console.log(this.response)
        }
        else{
          console.log("NO data")
        }

      });
    }
  // pageChange(newPage: number) {
  //   this.router.navigate(['/websites'], { queryParams: { page: newPage } });
  //   this.service.getService(this.params) .subscribe((resp:any) => {
  //             this.response=resp
  //             console.log(this.response)
    
  //           });
  // }
  ngOnInit() {
   this.pageChange(0); 
  }

}