import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './ui/loading/loading-component/loading-component';
import { LoadingService } from './services/loading/loading';
import { Location } from '@angular/common';
import { LocationService } from './services/route/location/location-service';
import { CommonButton } from './ui/common-button/common-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingComponent, CommonButton],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private loadingSrv: LoadingService = inject(LoadingService);
  private locationSrv: LocationService = inject(LocationService);
  private location: Location = inject(Location);
  protected readonly title = signal('managerInvestments');
  loading = this.loadingSrv.loading;
  showBackBtn = this.locationSrv.showBackButton

  ngOnChanges() {
  }

  back() {
    this.location.back();
  }
}
