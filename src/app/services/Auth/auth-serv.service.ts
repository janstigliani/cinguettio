import { inject, Injectable, signal } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServService {

  firebaseServ = inject(FirebaseService)
  isAuth = signal(false);

  constructor() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("auth changed: authorized", user);
        this.isAuth.set(true);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("auth changed: unauthorized");
        this.isAuth.set(false);
      }
    });
  }

  firebaseLogin(email: string, password: string) {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("bene bene", user);
        // ...
      })
      .catch((error) => {
        console.log("male male")
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  firebaseLogOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.isAuth.set(false);
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  firebaseRegister(nickname:string ,email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);

        this.firebaseServ.saveUser(user.uid, nickname);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}
