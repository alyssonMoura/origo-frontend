import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClientesListComponent } from './pages/cliente/component/clientes-list/clientes-list.component';
import { ClientesCreateComponent } from './pages/cliente/component/clientes-create/clientes-create.component';
import { ClientesEditComponent } from './pages/cliente/component/clientes-edit/clientes-edit.component';
import { ClientesShowComponent } from './pages/cliente/component/clientes-show/clientes-show.component';
import { PlanoComponent } from './pages/plano/plano/plano.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ClienteComponent,
    ClientesListComponent,
    ClientesCreateComponent,
    ClientesEditComponent,
    ClientesShowComponent,
    PlanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
