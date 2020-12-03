import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlankComponent } from './views/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { NonAuthGuard } from './utils/guards/non-auth.guard';
import {ConfirmComponent} from './pages/confirm/confirm.component';
import {CountriesComponent} from './views/geo/countries/countries.component';
import {CountryCreateComponent} from './views/geo/countries/country-create/country-create.component';
import {CountriesMainComponent} from './pages/countries-main/countries-main.component';
import {CountryUpdateComponent} from './views/geo/countries/country-update/country-update.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'blank', component: BlankComponent},
      {
        path: 'countries',
        component: CountriesMainComponent,
        canActivate: [AuthGuard],
        children: [
          {path: '', component: CountriesComponent},
          {path: 'create', component: CountryCreateComponent},
          {path: 'update/:uuid', component: CountryUpdateComponent},
        ],
      },
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: 'confirm/:confirmToken',
    component: ConfirmComponent
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
