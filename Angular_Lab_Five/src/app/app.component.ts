import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  numberOfTimes: number = 0;
  hidden: boolean = false;


  count() {
    this.numberOfTimes++;
  }

  show() {
    if (this.hidden == true) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}
