import { Component } from '@angular/core';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { Profile } from './profile/profile';
import { CounterApp } from './counter-app/counter-app';

@Component({
  selector: 'app-root',
  imports: [Login, SignUp, Profile, CounterApp],
  templateUrl: './app.html',
  // template: `<h1>inline tag {{name}}</h1>`,    inline html
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('angular-21');
  // name="anil kumar"

  // updateName(){
  //   this.name="sidh"
  // }

  // interpolation

  // name="anil kumar"
  // email="abc@gmail.com"

  // getName(a:number, b:number){
  //   return a+b;
  // }

  // function

  // butttonClick(){
  //   console.log("button clicked");
  //   this.otherFunction();
  // }

  // otherFunction(){
  //   console.log("other function called");
  // }

  // datatype

  name:string= "my name";  //property because it is in class
  company="new company"
  data:any="old"
  age:number | string = "twentytwo"

  dataType(){
    this.name = "peter"   //allow string value only if any other show error
    this.company="company" // without type defined also work proper
    this.data=123; // if we use any then it accept any value
    this.age=22;  // we can define multiple type
    let x:number =20;   // variable because itt is in function
    console.log(x);
  }

  sum(a:number, b:number){
    let sum = a + b;
    console.log(sum);
  }





}
