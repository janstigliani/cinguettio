import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { authGuard } from './auth-guard/auth-guard.component';

export const routes: Routes = [
    { path: "list", component: ListComponent, canActivate: [authGuard],},
    { path: "login", component: LoginComponent },
    { path: "register", component: RegistrationComponent },
    { path: "**", redirectTo: "/list", pathMatch: "full", canActivate: [authGuard], }
];
