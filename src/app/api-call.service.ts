import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpCall:HttpClient) { }
  getscore(){
    const url =`https://cricketapi.platform.iplt20.com//fixtures/23473/scoring`;
    return this.httpCall.get(url);
  }
}
