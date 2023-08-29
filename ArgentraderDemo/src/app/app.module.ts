import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComunComponent } from './componentes/header-comun/header-comun.component';
import { FooterComunComponent } from './componentes/footer-comun/footer-comun.component';
import { FormCreateUserComponent } from './componentes/form-create-user/form-create-user.component';
import { TopButtonComponent } from './componentes/top-button/top-button.component';
import { ExitButtonComponent } from './componentes/exit-button/exit-button.component';
import { LoginComponent } from './paginas/login/login.component';
import { CreateUserComponent } from './paginas/create-user/create-user.component';
import { HomeCotizacionesComponent } from './paginas/home-cotizaciones/home-cotizaciones.component';
import { MiCuentaComponent } from './paginas/mi-cuenta/mi-cuenta.component';
import { MiPortfolioComponent } from './paginas/mi-portfolio/mi-portfolio.component';
import { AjustesComponent } from './paginas/ajustes/ajustes.component';
import { BuyFormComponent } from './paginas/buy-form/buy-form.component';
import { RestorePasswordComponent } from './paginas/restore-password/restore-password.component';
import { ValidateCodeComponent } from './paginas/validate-code/validate-code.component';
import { ChoosePasswordComponent } from './paginas/choose-password/choose-password.component';
import { ChooseResultComponent } from './paginas/choose-result/choose-result.component';
import { ResetPassComponent } from './componentes/reset-pass/reset-pass.component';
import { BodyLadingPageComponent } from './componentes/body-lading-page/body-lading-page.component';
import { LoginFormComponent } from './componentes/login-form/login-form.component';
import { GetPassComponent } from './componentes/get-pass/get-pass.component';
import { ResetPassStateComponent } from './componentes/reset-pass-state/reset-pass-state.component';
import { VerifyCodeComponent } from './componentes/verify-code/verify-code.component';
import { CotizationsTableComponent } from './componentes/cotizations-table/cotizations-table.component';
import { CotizacionesServiceService } from './services/cotizaciones-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './paginas/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComunComponent,
    FooterComunComponent,
    FormCreateUserComponent,
    TopButtonComponent,
    ExitButtonComponent,
    LoginComponent,
    CreateUserComponent,
    HomeCotizacionesComponent,
    MiCuentaComponent,
    MiPortfolioComponent,
    AjustesComponent,
    BuyFormComponent,
    RestorePasswordComponent,
    ValidateCodeComponent,
    ChoosePasswordComponent,
    ChooseResultComponent,
    ResetPassComponent,
    BodyLadingPageComponent,
    LoginFormComponent,
    GetPassComponent,
    ResetPassStateComponent,
    VerifyCodeComponent,
    CotizationsTableComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CotizacionesServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
