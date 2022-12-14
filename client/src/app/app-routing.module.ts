import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { EditarperfilComponent } from './components/user/editarperfil/editarperfil.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthedGuard } from './guards/authed.guard';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { ConfigBuscadorComponent } from './components/configuracion/config-buscador/config-buscador.component';
import { HobbiesComponent } from './components/configuracion/perfil/hobbies/hobbies.component';
import { FotosComponent } from './components/configuracion/perfil/fotos/fotos.component';
import { ConfiguracionContactoComponent } from './components/configuracion/configuracion-contacto/configuracion-contacto.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthedGuard]},
  {path: 'registro', component: RegisterComponent, canActivate: [AuthedGuard]},
  {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
  {path: 'buscador', component: BuscadorComponent, canActivate: [AuthGuard]},
  {path: 'user/:id', component: PerfilComponent, canActivate: [AuthGuard]},
  {path: 'favoritos', component: FavoritosComponent, canActivate: [AuthGuard]},
  {path: 'solicitudes', component: SolicitudesComponent, canActivate: [AuthGuard]},
  {path: 'preferencias', component: ConfiguracionComponent, canActivate: [AuthGuard]},
  {path: 'preferencias/perfil', component: EditarperfilComponent, canActivate: [AuthGuard]},
  {path: 'preferencias/perfil/hobbies', component: HobbiesComponent, canActivate: [AuthGuard]},
  {path: 'preferencias/perfil/fotos', component: FotosComponent, canActivate: [AuthGuard]},
  {path: 'preferencias/buscador', component: ConfigBuscadorComponent, canActivate: [AuthGuard]},
  {path: 'preferencias/contacto', component: ConfiguracionContactoComponent, canActivate: [AuthGuard]},
  {path: "**", pathMatch: "full", component: PagenotfoundComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
