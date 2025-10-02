import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private router: Router = inject(Router);
  showBackButton: WritableSignal<boolean> = signal<boolean>(false);

  constructor() {
    this.router.events.subscribe((data) => {
      if (data.type === 1) {
        this.showBackButton.set(data.urlAfterRedirects !== '/');
      }
    });
  }
}
