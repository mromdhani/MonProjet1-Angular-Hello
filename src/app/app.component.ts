import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' //,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BIAT';
  participants : string[] = ['Sami', 'Mahmoud', 'Zouheir', 'Houssem', 'Marwene', 'Ghada'];
}
