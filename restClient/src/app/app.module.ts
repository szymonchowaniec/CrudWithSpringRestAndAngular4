import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from './shared-service/user.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '' , component: ListUserComponent},
  {path: 'op' , component: UserFormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
