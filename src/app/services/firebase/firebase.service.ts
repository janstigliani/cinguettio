import { inject, Injectable, signal } from '@angular/core';
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, Firestore, getDocs, getFirestore, onSnapshot, setDoc, Timestamp } from "firebase/firestore";
import { Cinguettio } from '../../model/cinguettio';
import { LocationService } from '../location/location.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  locationServ = inject(LocationService);

  firebaseConfig = {
    apiKey: "AIzaSyA7ymoFr6ZVE0AEy-SNkrpLws95vcMq-cc",
    authDomain: "cinguetto-69d31.firebaseapp.com",
    projectId: "cinguetto-69d31",
    storageBucket: "cinguetto-69d31.firebasestorage.app",
    messagingSenderId: "1001473759556",
    appId: "1:1001473759556:web:6027bafeb24555a1f99f11"
  };

  db?: any;

  cinguettii = signal<Cinguettio[]>([])


  constructor() { }

  init() {
    const app = initializeApp(this.firebaseConfig);
    this.db = getFirestore(app);
  }

  async getAllCinguettii() {
    // const newArray: Cinguettio[] = [];
    // const querySnapshot = await getDocs(collection(this.db, "cinguettii"));
    // querySnapshot.forEach((doc) => {

    //   // const newCinguettio: Cinguettio = {id: doc.id, ...doc.data()}

    //   const newCinguettio = doc.data() as Cinguettio;

    //   newCinguettio.id = doc.id;

    //   newArray.push(newCinguettio);

    // });

    // this.cinguettii.update((_) => newArray)



    const unsubscribe = onSnapshot(collection(this.db, "cinguettii"), (snap) => {

      const newArray: Cinguettio[] = [];

      snap.forEach((doc) => {

        // const newCinguettio: Cinguettio = {id: doc.id, ...doc.data()}

        const newCinguettio = doc.data() as Cinguettio;

        newCinguettio.id = doc.id;

        newArray.push(newCinguettio);

      });

      this.cinguettii.update((_) => newArray);

    })

  }

  async publish(cinguettioText: string) {

    const location = this.locationServ.getLocation().then(location => {
      const newCinguettio: Cinguettio = {
        text: cinguettioText,
        creationTime: Timestamp.now(),
        location: {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        }
      }
      addDoc(collection(this.db, "cinguettii"), newCinguettio);
    }).catch((error) => {
      const newCinguettio: Cinguettio = {
        text: cinguettioText,
        creationTime: Timestamp.now(),
      }
      addDoc(collection(this.db, "cinguettii"), newCinguettio);
    });
  }
}
