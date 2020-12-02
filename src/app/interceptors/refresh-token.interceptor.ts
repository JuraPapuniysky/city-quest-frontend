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
import {Router} from '@angular/router';


@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private auth: AppService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap(event => {
    }, error => {
      console.log(error);
      if (error.status === 401) {
        this.router.navigate(['/login']);
      }
    }));
  }
}
