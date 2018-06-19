import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from './shared-service/user.service';
import {HttpModule} from '@angular/http';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { SearchCustomersComponent } from './components/search-customers/search-customers.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {DataService} from "./data.service";

const appRoutes: Routes = [
  {path: '' , component: ListUserComponent},
  {path: 'op' , component: UserFormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserFormComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent,
    SearchCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService,
  DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
