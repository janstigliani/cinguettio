import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthServService } from '../../services/Auth/auth-serv.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  authServ = inject(AuthServService);

  logOut() {
    this.authServ.firebaseLogOut();
  }
}
