import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { IntComponent } from './int/int.component';
import { ServiceService } from './service.service';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ValidateComponent } from './validate/validate.component';
import { InitiateComponent } from './initiate/initiate.component';

// const appRoutes: Routes =[
//   {path: '', component:ButtonComponent  },
//   { path: 'table', component: TableComponent }
// ]
const appRoutes: Routes =[
    {path: 'CountryList', component:CountryComponent  },
    { path: 'validate', component: ValidateComponent },
    { path: '', component: InitiateComponent },

  ]

@NgModule({
  declarations: [
    AppComponent,
    IntComponent,
    
    ButtonComponent,
    
    TableComponent,
    
    CountryComponent,
    
    ValidateComponent,
    
    InitiateComponent,
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
