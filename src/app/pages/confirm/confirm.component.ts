import { Component, OnInit } from '@angular/core';
import {AppService} from '../../utils/services/app.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private appService: AppService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.confirm();
  }

  private confirm(): void {
    this.activatedRoute.params.subscribe(params => {
      const confirmToken = params.confirmToken;
      this.appService.confirm(confirmToken);
    });
  }
}
