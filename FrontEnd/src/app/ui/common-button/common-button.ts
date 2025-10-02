import { Component, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-common-button',
  imports: [],
  templateUrl: './common-button.html',
  styleUrl: './common-button.scss'
})
export class CommonButton {
  backClicked = output();
}
