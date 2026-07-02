import { Component } from '@angular/core';

@Component({
  selector: 'app-inputvalueget',
  imports: [],
  templateUrl: './inputvalueget.html',
  styleUrl: './inputvalueget.css',
})
export class Inputvalueget {
  name="";
  displayName="";
  email="";
  displayEmail="";
  getName(event:Event){
    this.name = (event.target as HTMLInputElement).value;
 }

 showName(){
  this.displayName = this.name;
 }

 setName(){
  this.name = "sam";
 }

 getEmail(val:string){
     console.log(val);
     this.displayEmail=val;
 }

 setEmail(){
     this.email="demo@mail.com";
 }


}