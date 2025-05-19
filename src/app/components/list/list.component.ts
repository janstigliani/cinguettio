import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { FormCinguettioComponent } from "../form-cinguettio/form-cinguettio.component";
import { AuthServService } from '../../services/Auth/auth-serv.service';

@Component({
  selector: 'app-list',
  imports: [FormCinguettioComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  firebaseServ = inject(FirebaseService);
  authServ = inject(AuthServService);
}
