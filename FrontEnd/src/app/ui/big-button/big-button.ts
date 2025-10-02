import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-big-button',
  imports: [NgOptimizedImage],
  templateUrl: './big-button.html',
  styleUrl: './big-button.scss',
})
export class BigButton {
  label = input('Botón');
  class = input('', { alias: 'extraClass' });
  icon = input('');
  disabled = input(false, { alias: 'disabled' });
  click = output<boolean>({
    alias: 'onClick',
  });
}
