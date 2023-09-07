import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComunComponent } from './componentes/header-comun/header-comun.component';
import { FooterComunComponent } from './componentes/footer-comun/footer-comun.component';
import { TopButtonComponent } from './componentes/top-button/top-button.component';
import { ExitButtonComponent } from './componentes/exit-button/exit-button.component';
import { HomeCotizacionesComponent } from './paginas/home-cotizaciones/home-cotizaciones.component';
import { MiCuentaComponent } from './paginas/mi-cuenta/mi-cuenta.component';
import { MiPortfolioComponent } from './paginas/mi-portfolio/mi-portfolio.component';
import { AjustesComponent } from './paginas/ajustes/ajustes.component';
import { BuyFormPageComponent } from './paginas/buy-form-page/buy-form.component';
import { RestorePasswordComponent } from './paginas/restore-password/restore-password.component';
import { ValidateCodeComponent } from './paginas/validate-code/validate-code.component';
import { ChoosePasswordComponent } from './paginas/choose-password/choose-password.component';
import { ChooseResultComponent } from './paginas/choose-result/choose-result.component';
import { ResetPassComponent } from './componentes/reset-pass/reset-pass.component';
import { BodyLadingPageComponent } from './componentes/body-lading-page/body-lading-page.component';
import { GetPassComponent } from './componentes/get-pass/get-pass.component';
import { ResetPassStateComponent } from './componentes/reset-pass-state/reset-pass-state.component';
import { VerifyCodeComponent } from './componentes/verify-code/verify-code.component';
import { CotizationsTableComponent } from './componentes/cotizations-table/cotizations-table.component';
import { CotizacionesServiceService } from './services/cotizaciones-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundPageComponent } from './paginas/not-found-page/not-found.component';
import { MyPortfolioComponent } from './componentes/my-portfolio/my-portfolio.component';
import { SettingsComponent } from './componentes/settings/settings.component';
import { MyAccountComponent } from './componentes/my-account/my-account.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component'
import { LandingPageComponent } from './paginas/landing-page/landing-page.component';
import { ReturnBtnComponent } from './componentes/return-btn/return-btn.component';
import { CarrouselComponent } from './componentes/carrousel/carrousel.component'
import { FooterLandingComponent } from './componentes/footer-landing/footer-landing.component';
import { HeaderLandingComponent } from './componentes/header-landing/header-landing.component';
import { NavbarComunComponent } from './componentes/navbar-comun/navbar-comun.component';
import { GetNewPassComponent } from './paginas/get-new-pass/get-new-pass.component';
import { VerifyRegisterComponent } from './componentes/verify-register/verify-register.component';
import { VerifyRegisterStateComponent } from './componentes/verify-register-state/verify-register-state.component';
import { VerifyRegisterPageComponent } from './paginas/verify-register-page/verify-register-page.component';
import { VerifyRegisterStatePageComponent } from './paginas/verify-register-state-page/verify-register-state-page.component';
import { LogoutButtonComponent } from './componentes/logout-button/logout-button.component';
import { LoginComponent } from './paginas/login/login.component';
import { AuthModule } from './componentes/auth/auth.module';
import { RegisterModule } from './componentes/register/register.module';
import { CreateUserComponent } from './paginas/create-user/create-user.component';
import { BuyFormModuleModule } from './componentes/buy-form-module/buy-form-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComunComponent,
    FooterComunComponent,
    TopButtonComponent,
    ExitButtonComponent,
    HomeCotizacionesComponent,
    MiCuentaComponent,
    MiPortfolioComponent,
    AjustesComponent,
    BuyFormPageComponent,
    RestorePasswordComponent,
    ValidateCodeComponent,
    ChoosePasswordComponent,
    ChooseResultComponent,
    ResetPassComponent,
    BodyLadingPageComponent,
    GetPassComponent,
    ResetPassStateComponent,
    VerifyCodeComponent,
    CotizationsTableComponent,
    NotFoundPageComponent,
    MyPortfolioComponent,
    SettingsComponent,
    MyAccountComponent,
    NotFoundComponent,
    LandingPageComponent,
    ReturnBtnComponent,
    CarrouselComponent,
    FooterLandingComponent,
    BodyLadingPageComponent,
    HeaderLandingComponent,
    NavbarComunComponent,
    GetNewPassComponent,
    CreateUserComponent,
    VerifyRegisterComponent,
    VerifyRegisterPageComponent,
    VerifyRegisterPageComponent,
    VerifyRegisterStateComponent,
    VerifyRegisterStatePageComponent,
    LogoutButtonComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    RegisterModule,
    BuyFormModuleModule

    ],
  providers: [
    CotizacionesServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
