import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {SimpleResponseEntity} from '../../entities/response/simple-response-entity';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  private apiUrl: string = environment.apiUrl;

  private access: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    await this.checkToken();
    if (this.access === false) {
      this.router.navigate(['/login']);
    }

    return this.access;
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
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', localStorage.getItem('access-token'));
      this.http.request('POST', `${this.apiUrl}/auth/check`, {
        headers: headers
      }).toPromise()
        .then((data: SimpleResponseEntity) => {
          if (data.status === 'success') {
            this.access = true;
          }
          resolve();
          // tslint:disable-next-line:no-shadowed-variable
        }, error => {
          this.access = false;
          resolve();
        });
    });
  }
}
