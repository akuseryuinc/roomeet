import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { UserService } from './services/user.service';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { EditarperfilComponent } from './components/user/editarperfil/editarperfil.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { ConfigBuscadorComponent } from './components/configuracion/config-buscador/config-buscador.component';
import { HobbiesComponent } from './components/configuracion/perfil/hobbies/hobbies.component';
import { FotosComponent } from './components/configuracion/perfil/fotos/fotos.component';
import { ConfiguracionContactoComponent } from './components/configuracion/configuracion-contacto/configuracion-contacto.component';
import { HttpLoadingInterceptorService } from './services/http-loading-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BuscadorComponent,
    PerfilComponent,
    EditarperfilComponent,
    PagenotfoundComponent,
    ConfiguracionComponent,
    FavoritosComponent,
    LoginComponent,
    RegisterComponent,
    EditarperfilComponent,
    SolicitudesComponent,
    ConfigBuscadorComponent,
    HobbiesComponent,
    FotosComponent,
    ConfiguracionContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgToastModule
  ],
  providers: [
    UserService,
    //JWT
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    //Interceptor
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpLoadingInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
