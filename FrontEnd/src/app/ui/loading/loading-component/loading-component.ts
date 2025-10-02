import { Component, effect, inject } from '@angular/core';
import { LoadingService } from '../../../services/loading/loading';
import { DialogService } from '../../../services/dialog/dialog';
import { LoadingModal } from '../loading-modal/loading-modal';

@Component({
  selector: 'app-loading-component',
  imports: [],
  templateUrl: './loading-component.html',
  styleUrl: './loading-component.scss',
})
export class LoadingComponent {
  private loadingSrv: LoadingService = inject(LoadingService);
  private dialogSrv: DialogService = inject(DialogService);
  loading = this.loadingSrv.loading;

  loadingEffect = effect(() => {
    if (this.loading()) {
      this.dialogSrv.open(LoadingModal);
    } else {
      this.dialogSrv.close();
    }
  });
}
