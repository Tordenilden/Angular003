import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  list:any[]=[];
  //define
  add(item:string){
    //console.log(item);
    //this.list.push("text");
    this.list.push({id:this.list.length+1,name:item})
    console.log(this.list);
  }
  remove(id:string){
    console.log(id);
    //this.list =this.list.filter(element=>element.name!==id);

    this.list.splice(2,1);
    console.log(this.list);
  }
}
