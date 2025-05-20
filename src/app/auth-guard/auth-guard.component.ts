import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServService } from '../services/Auth/auth-serv.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authServ = inject(AuthServService);
  console.log("we're in, onee-sama!")
  const router = inject(Router)
  if (authServ.isAuth()){
    return true;
  } else { 
    console.log("You shall not pas")
    // return createUrlTreeFromSnapshot(route, ['/login']);
    return router.createUrlTree(['/login'])
  }
};

export const authGuardLogged: CanActivateFn = (route, state) => {
  const authServ = inject(AuthServService);
  const router = inject(Router)
  if (!authServ.isAuth()){
    return true;
  } else { 
    return router.createUrlTree(['/list'])
  }
};
