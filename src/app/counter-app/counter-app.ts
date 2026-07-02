import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  count = 0;
  increment(){
    this.count++;
  }

  decrement(){
    if(this.count > 0){
       this.count--;
    }
    
  
  }

  reset(){
    this.count = 0;
  }

  // or this single function
  
  counter(val:string){
    if(val=="plus"){
      this.count++;
    }else if(val == "minus" && this.count > 0){
      this.count--;
    }else{
      this.count = 0;
    }
  }
}
