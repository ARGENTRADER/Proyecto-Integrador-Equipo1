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
    ResetPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
