import { Component } from '@angular/core';
import { Modal } from '../../modal/modal/modal';
import { SmallBotonera } from "../../small-botonera/small-botonera";

@Component({
  selector: 'app-message-modal',
  imports: [SmallBotonera],
  templateUrl: './message-modal.html',
  styleUrl: './message-modal.scss'
})
export class MessageModal extends Modal {
}
