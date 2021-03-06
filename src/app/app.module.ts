import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { MenuSidebarComponent } from './pages/main/menu-sidebar/menu-sidebar.component';
import { BlankComponent } from './views/blank/blank.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './views/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { MessagesDropdownMenuComponent } from './pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppButtonComponent } from './components/app-button/app-button.component';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { UserDropdownMenuComponent } from './pages/main/header/user-dropdown-menu/user-dropdown-menu.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import {RefreshTokenInterceptor} from './interceptors/refresh-token.interceptor';
import {AuthHeadersInterceptor} from './interceptors/auth-headers.interceptor';
import { CitiesComponent } from './views/geo/cities/cities.component';
import { CountriesComponent } from './views/geo/countries/countries.component';
import { CountryCreateComponent } from './views/geo/countries/country-create/country-create.component';
import { CountryUpdateComponent } from './views/geo/countries/country-update/country-update.component';
import { CountryFormComponent } from './views/geo/countries/country-form/country-form.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { CountriesMainComponent } from './pages/countries-main/countries-main.component';
import { CityCreateComponent } from './views/geo/cities/city-create/city-create.component';
import { CityUpdateComponent } from './views/geo/cities/city-update/city-update.component';
import { CityFormComponent } from './views/geo/cities/city-form/city-form.component';
import { CitiesMainComponent } from './pages/cities-main/cities-main.component';
import { QuestsComponent } from './views/quest/quests/quests.component';
import { QuestCreateComponent } from './views/quest/quests/quest-create/quest-create.component';
import { QuestUpdateComponent } from './views/quest/quests/quest-update/quest-update.component';
import { QuestFormComponent } from './views/quest/quests/quest-form/quest-form.component';
import { QuestMainComponent } from './pages/quest/quest-main/quest-main.component';
import { QuestionFormComponent } from './views/quest/quests/questions/question-form/question-form.component';
import {AutocompleteLibModule} from "angular-ng-autocomplete";


registerLocaleData(localeEn, 'en-EN');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    AppButtonComponent,
    UserDropdownMenuComponent,
    ConfirmComponent,
    CitiesComponent,
    CountriesComponent,
    CountryCreateComponent,
    CountryUpdateComponent,
    CountryFormComponent,
    CountriesMainComponent,
    CityCreateComponent,
    CityUpdateComponent,
    CityFormComponent,
    CitiesMainComponent,
    QuestsComponent,
    QuestCreateComponent,
    QuestUpdateComponent,
    QuestFormComponent,
    QuestMainComponent,
    QuestionFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgbModule,
        HttpClientModule,
        CKEditorModule,
        FormsModule,
        AutocompleteLibModule,
    ],
  providers: [
     {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true},
     {provide: HTTP_INTERCEPTORS, useClass: AuthHeadersInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
