import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpClient, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
import {AppService} from '../utils/services/app.service';
import {tap} from 'rxjs/operators';
import {AuthGuard} from '../utils/guards/auth.guard';


@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private auth: AppService, private authGuard: AuthGuard) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap(event => {
      return next.handle(request);
    }, error => {
      console.log(error);
      if (error.status === 412) {
        this.auth.refreshToken();
        request = request.clone({
          setHeaders: {Authorization: localStorage.getItem('access-token')}
        });
        this.authGuard.setAccess(true);
      }
    }));
  }
}
