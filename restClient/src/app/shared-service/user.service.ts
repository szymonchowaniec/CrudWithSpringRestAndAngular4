import { Injectable } from '@angular/core';
import {RequestOptions, Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {User} from '../user';

@Injectable()
export class UserService {

  private baseUrl = 'http://localhost:8080/api';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers:this.headers});


  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get(this.baseUrl + '/users', this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getUser(id: Number) {
    return this._http.get(this.baseUrl + '/users' + id, this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteUser(id: Number) {
    return this._http.delete(this.baseUrl + '/users' + id, this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  createUser(user: User) {
    return this._http.post(this.baseUrl + '/users', JSON.stringify(user), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateUser(user: User) {
    return this._http.put(this.baseUrl + '/users', JSON.stringify(user), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

   errorHandler(error: Response) {
    return Observable.throw(error || 'SERWER ERROR' );
  }


}
