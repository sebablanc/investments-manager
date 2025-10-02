import { Component } from '@angular/core';
import { BigButton } from "../../ui/big-button/big-button";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MainButtons } from '../../models/main-buttons-dto';
import { MainConfiguration } from '../../configuration/main/main-configuration';

@Component({
  selector: 'app-main',
  imports: [BigButton, CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

  buttons: MainButtons[] = [];

  constructor(
    private mainConfig: MainConfiguration,
    private router: Router
  ) {}

  ngOnInit(){
    this.buttons = this.mainConfig.buttons;
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
