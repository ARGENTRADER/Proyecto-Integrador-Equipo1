import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComunComponent } from './componentes/header-comun/header-comun.component';
import { FooterComunComponent } from './componentes/footer-comun/footer-comun.component';
import { FormCreateUserComponent } from './componentes/form-create-user/form-create-user.component';
import { TopButtonComponent } from './componentes/top-button/top-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComunComponent,
    FooterComunComponent,
    FormCreateUserComponent,
    TopButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
