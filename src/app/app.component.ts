import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showText = false;
  clicks: number[] = [];

  onToggleClicked() {
    this.showText = !this.showText;
    this.clicks.push(this.clicks.length + 1);
  }
}
