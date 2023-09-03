import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './paginas/login/login.component';
import { CreateUserComponent } from './paginas/create-user/create-user.component';
import { HomeCotizacionesComponent } from './paginas/home-cotizaciones/home-cotizaciones.component';
import { MiCuentaComponent } from './paginas/mi-cuenta/mi-cuenta.component';
import { MiPortfolioComponent } from './paginas/mi-portfolio/mi-portfolio.component';
import { AjustesComponent } from './paginas/ajustes/ajustes.component';
import { BuyFormPageComponent } from './paginas/buy-form-page/buy-form.component';
import { RestorePasswordComponent } from './paginas/restore-password/restore-password.component';
import { ValidateCodeComponent } from './paginas/validate-code/validate-code.component';
import { ChoosePasswordComponent } from './paginas/choose-password/choose-password.component';
import { ChooseResultComponent } from './paginas/choose-result/choose-result.component';
import { NotFoundPageComponent } from './paginas/not-found-page/not-found.component';
import { LandingPageComponent } from './paginas/landing-page/landing-page.component';
import { GetNewPassComponent } from './paginas/get-new-pass/get-new-pass.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'home',
    component: HomeCotizacionesComponent
  },
  {
    path: 'buy-action',
    component: BuyFormPageComponent
  },
  {
    path: 'my-account',
    component: MiCuentaComponent
  },
  {
    path: 'settings',
    component: AjustesComponent
  },
  {
    path: 'my-portfolio',
    component: MiPortfolioComponent
  },
  {
    path: 'restore-password',
    component: RestorePasswordComponent
  },
  {
    path: 'get-new-password',
    component: GetNewPassComponent
  },
  {
    path: 'validate-code',
    component: ValidateCodeComponent
  },
  {
    path: 'choose-password',
    component: ChoosePasswordComponent
  },
  {
    path: 'result',
    component: ChooseResultComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
