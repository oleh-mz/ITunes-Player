import { Component } from '@angular/core';
import { PlayerService } from './shared/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PlayerService]
})
export class AppComponent {

}
