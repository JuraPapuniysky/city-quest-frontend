import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {SimpleResponseEntity} from '../../entities/response/simple-response-entity';
import {AppService} from '../services/app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  private apiUrl: string = environment.apiUrl;

  private access: boolean = false;

  constructor(private http: HttpClient, private router: Router, private auth: AppService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.checkToken();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  private checkToken(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.request('POST', `${this.apiUrl}/auth/check`).toPromise()
        .then((data: SimpleResponseEntity) => {
          if (data.status === 'success') {
            this.access = true;
          }
          resolve(this.access);
        }, error => {
          this.auth.refreshToken().then(error => {
            this.access = false;
            location.reload();
          });
          resolve(this.access);
        });
    });
  }


  public setAccess(value: boolean): void {
    this.access = value;
  }

  public getAccess(): boolean {
    return this.access;
  }
}
