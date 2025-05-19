import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServService } from '../../services/Auth/auth-serv.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authServ = inject(AuthServService);

  email = "";
  password = "";

  login(){
    this.authServ.firebaseLogin(this.email, this.password);
  }
}
