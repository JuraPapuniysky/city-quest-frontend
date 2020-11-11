import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AppService } from '../../utils/services/app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {DeviceDetectorService} from 'ngx-device-detector';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public isAuthLoading = false;
  constructor(
    private renderer: Renderer2,
    private toastr: ToastrService,
    private appService: AppService,
    private deviceDetectorService: DeviceDetectorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      fingerPrint: new FormControl(null, Validators.required),
    });
  }

  async login() {
    this.loginForm.controls.fingerPrint.setValue(this.deviceDetectorService.getDeviceInfo().userAgent);
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      await this.appService.login(this.loginForm);
      const loginResponse = this.appService.getLoginResponse();
      if (loginResponse.status === 'success') {
        await this.router.navigate(['/']);
      } else {
        this.toastr.error(loginResponse.message, 'Login error');
      }
    }
  }


  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }
}
