import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google Maps';

  position = {
    lat: -31.306250,
    lng: -64.241990
  }

  label ={
    color: "red",
    text: "mi casa"
  }
}
