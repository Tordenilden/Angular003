import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({ // decorator - its just a "setting for the file"
  selector: 'app-first', // this is the name of the component...
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  // variables, methods (ctor)
  myFirst : string = "myValue"; //Typescript
  mySecond = "test"; // what is this?? this is angular??
  tal : number = 123;
  myArr : number[] =[1,2,3];
  myArr1 : number[]=[];
  stringArr : string[] = ['Bo','Erik','Bodil','Eriksonn'];
  // 1) output to my HTML - interpolation, more later
  data : Coffe[]=[
    {taste:'bad',milk:true},
    {taste:'good',milk:false},
    {taste:'nice',milk:false},
    {taste:'hot hot',milk:true},
  ]

  //methods
  //c#
  // public void hansi(){
  //   //concatWith("";)
  // }
  method21():string{
    return "your are smart";

  }
  methodName():void{
    console.log("this is just a test");
    console.log(this.method2());

  }
  method2():string{
    return "text";
  }
  method3():void{
    //myFirst3 : string = "myValue";
    // let is scope
    let myFirst3 : string = "value";
    // Coffe f = new Coffe();
    // there is a type like in c# Object - any
    var myFirst4 : string = "something";

  }
}
class Coffe{
  taste : string ="";
  milk : boolean=false;
}
