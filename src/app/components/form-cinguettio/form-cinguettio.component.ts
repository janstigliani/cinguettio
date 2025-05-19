import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../services/firebase/firebase.service';

@Component({
  selector: 'app-form-cinguettio',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-cinguettio.component.html',
  styleUrl: './form-cinguettio.component.scss'
})
export class FormCinguettioComponent {
  firebaseServ = inject(FirebaseService)
  cinguettioText = "pippo";

  cinguetta(){
    console.log(this.cinguettioText);
    this.firebaseServ.publish(this.cinguettioText);
    this.cinguettioText = "";
  }
}
