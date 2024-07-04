import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DepenseNgZorroAntdModule } from './DepenseNgZorroAntdModule';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepenseComponent } from './components/depense/depense.component';
import { RevenuComponent } from './components/revenu/revenu.component';
import { UpdateDepenseComponent } from './components/update-depense/update-depense.component';
import { UpdateRevenuComponent } from './components/update-revenu/update-revenu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpInterceptorService } from './services/http-interceptor-service.service';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RevenuComponent,
    DepenseComponent,
    UpdateDepenseComponent,
    UpdateRevenuComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DepenseNgZorroAntdModule,
    NzMenuModule,
    NzLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
