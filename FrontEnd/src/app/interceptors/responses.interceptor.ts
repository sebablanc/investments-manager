import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";
import { DialogService } from "../services/dialog/dialog";
import { inject } from "@angular/core";
import { MessageModal } from "../ui/message-modal/message-modal/message-modal";
import { Router } from "@angular/router";

export function httpResponseInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const dialogSrv = inject(DialogService);
  const router = inject(Router);
  return next(req).pipe(
    tap((event) => {}),
    catchError((err) => {
      console.log(err);

      switch (err.status) {
        case 404:
          dialogSrv.titulo.set('Error');
          dialogSrv.mensaje.set(err.error.detail);
          dialogSrv.open(MessageModal);
          break;
        case 500:
          dialogSrv.titulo.set('Error');
          dialogSrv.mensaje.set('Uuups... Hubo un error al realizar la operación en el servidor.');
          dialogSrv.open(MessageModal);
          router.navigateByUrl('/');
          break;

        default:
          break;
      }
      return throwError(() => err);
    })
  );
}
