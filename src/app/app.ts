import { Component } from '@angular/core';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';

@Component({
  selector: 'app-root',
  imports: [Login, SignUp],
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







}
