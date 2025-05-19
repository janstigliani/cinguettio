import { Component, inject } from '@angular/core';
import { AuthServService } from '../../services/Auth/auth-serv.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  authServ = inject(AuthServService);

  email: string = "";
  password: string = "";
  nickname: string = "";

  register(){
    this.authServ.firebaseRegister(this.nickname, this.email, this.password);
  }
}
