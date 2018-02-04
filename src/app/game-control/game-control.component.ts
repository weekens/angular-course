import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private intervalHandle?: any;
  private counter = 1;
  @Output()
  public readonly timer = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    if (this.intervalHandle) {
      return;
    }

    this.intervalHandle = setInterval(() => {
      this.timer.emit(this.counter++);
    }, 1000);
  }

  onStop() {
    clearInterval(this.intervalHandle);
    this.intervalHandle = undefined;
  }
}
