import { ClientesShowComponent } from './pages/cliente/component/clientes-show/clientes-show.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClientesCreateComponent } from './pages/cliente/component/clientes-create/clientes-create.component';
import { ClientesEditComponent } from './pages/cliente/component/clientes-edit/clientes-edit.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlanoComponent } from './pages/plano/plano/plano.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'cliente/create', component: ClientesCreateComponent },
  { path: 'cliente/update/:id', component: ClientesEditComponent },
  { path: 'cliente/delete/:id', component: ClientesShowComponent },
  { path: 'cliente/show/:id', component: ClientesShowComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'planos', component: PlanoComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
