import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  handleEvent(event:any){
    console.log("event clicked", event.type);
    console.log("event clicked", event.target.name);
    console.log("event clicked", (event.target as Element).className);
    console.log("value", (event.target as HTMLInputElement).value);
  }
}
