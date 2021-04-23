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
  getcurrent(){
    const url =`http://static.cricinfo.com/rss/livescores.xml`;
    return this.httpCall.get(url);
  }
  getAllTeam(){
    const url =`https://cricketapi.platform.iplt20.com/tournaments/22399/squads`;
    return this.httpCall.get(url);
  }
  getChannaiTeam(){
    const url =`https://cricketapi.platform.iplt20.com/tournaments/22399/squads/1?matchTypes=ALL`;
    return this.httpCall.get(url);
  }
  getMumbiaTeam(){
    const url =`https://cricketapi.platform.iplt20.com/tournaments/22399/squads/6?matchTypes=ALL`;
    return this.httpCall.get(url);
  }
  getDelhiTeam(){
    const url =`https://cricketapi.platform.iplt20.com/tournaments/22399/squads/3?matchTypes=ALL`;
    return this.httpCall.get(url);
  }
  getPunjabTeam(){
    const url =`https://cricketapi.platform.iplt20.com/tournaments/22399/squads/4?matchTypes=ALL`;
    return this.httpCall.get(url);
  }
  getKolkataTeam(){
    const url =`https://cricketapi.platform.iplt20.com/tournaments/22399/squads/5?matchTypes=ALL`;
    return this.httpCall.get(url);
  }
  getRajasthanTeam(){
    const url =`https://cricketapi.platform.iplt20.com/tournaments/22399/squads/8?matchTypes=ALL`;
    return this.httpCall.get(url);
  }
 
  getRoyalTeam(){
    const url =`https://cricketapi.platform.iplt20.com/tournaments/22399/squads/9?matchTypes=ALL`;
    return this.httpCall.get(url);
  }

}
