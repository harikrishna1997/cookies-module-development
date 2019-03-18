import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ServiceService } from './service.service';
import { ButtonComponent } from './button/button.component';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ValidateComponent } from './validate/validate.component';
import { InitiateComponent } from './initiate/initiate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WebsitesComponent } from './websites/websites.component';
import { CookiebannerComponent } from './cookiebanner/cookiebanner.component';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { SidebarComponent } from './sidebar/sidebar.component';
// const appRoutes: Routes =[
//   {path: '', component:ButtonComponent  },
//   { path: 'table', component: TableComponent }
// ]
const appRoutes: Routes =[
    {path: 'websites', component:WebsitesComponent },
    { path: 'Cookiebanner', component: CookiebannerComponent },
    { path: '', component:  NavbarComponent},

  ]

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SidebarComponent,
    NavbarComponent,
    
    
    
    CountryComponent,
    
    ValidateComponent,
    
    InitiateComponent,
    
    NavbarComponent,
    
    WebsitesComponent,
    
    CookiebannerComponent,
    
    SidebarComponent,
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ModalDialogModule.forRoot(),

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
