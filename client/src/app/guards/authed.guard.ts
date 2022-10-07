import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthedGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  
  canActivate(){
    if(this.userService.isLogged()) {
      console.log('Token no valido o ya expiro');
      this.router.navigate(['/perfil']);
      return false;
    }
    
    return true;
  }
  
}
