import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../Environments/Environments';
import { Hero } from '../Models/Hero';

//httpoptions
// call method
// environment opsætning

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroList:Hero[]=[];
  private apiUrl=environment.apiUrl+'/Hero';

  constructor(private http:HttpClient) { }
  getAllHardCode():Hero[]{
    this.heroList.push({id:1,name:"Bent",debutYear:new Date(2023,8,19)});
    this.heroList.push({id:2,name:"Bo",debutYear:new Date(2023,8,20)});
    // does not work
    // this.heroList.push({id:1,Name:"Bent",debutYear:new Date(2023,8,19)});
    // this.heroList.push({id:2,Name:"Bo",debutYear:new Date(2023,8,20)});
    return this.heroList;
  }
  getAll():Observable<Hero[]>{
    return this.http.get<Hero[]>(this.apiUrl);
  }
}
