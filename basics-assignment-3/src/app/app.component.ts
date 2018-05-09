import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display_flag = false;
  clicks = [];
  index = 0;
  toggleDetails() {
    this.display_flag = !this.display_flag;
    this.clicks.push([this.index++,new Date()]);
  }
}
