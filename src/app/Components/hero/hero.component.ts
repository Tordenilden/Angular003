import { Component } from '@angular/core';
import { Hero } from 'src/app/Models/Hero';
import { HeroService } from 'src/app/Services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  //Hero h = new this.Hero();
  hero:Hero={id:1,name:"Bent",debutYear:new Date(2023,8,19)};
  heroList:Hero[]=[];
  // id : number=0
  // name : string =""
  // debutYear : Date = new Date()
  /**
   *
   */

  // This auto makes an property called heroService that is private
  constructor(private heroService:HeroService) {


  }
  ngOnInit():void{
    // this.heroList.push(this.hero);
    // this.heroList.push(this.hero);
    // ctrl + *
    //hardcoded
    //this.heroList= this.heroService.getAllHardCode();

    // data from API
    this.heroService.getAll().subscribe(
      {
        next: (data)=>(this.heroList=data)
      }
    );

  }

}
