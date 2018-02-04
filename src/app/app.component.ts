import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public events: number[] = [];

  onTimer(value: number) {
    console.log('onTimer:', value);
    this.events.push(value);
  }
}
