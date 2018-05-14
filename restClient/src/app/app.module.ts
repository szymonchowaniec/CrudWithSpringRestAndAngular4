import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from './shared-service/user.service';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactivFormComponent } from './components/reactiv-form/reactiv-form.component';


const appRoutes: Routes = [
  {path: '' , component: ListUserComponent},
  {path: 'op' , component: UserFormComponent},
  {path:'contact', component: ContactFormComponent},
  {path:'reactive-form', component: ReactivFormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserFormComponent,
    ContactFormComponent,
    ReactivFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
