import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MetierprocheProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MetierprocheProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MetierprocheProvider Provider');
  }

  Get()  {
    return this.http.get("/metierproche").subscribe()
  }
}
