import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  getLocation(): Promise<any> {

    const promise = new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (location) => resolve(location),
          (error) => reject("Non mi danno la location, wueee!!")
        )
      } else {
        reject("Attiva la geolocalizzazione!! Testa di Cazzo!! Fatti controllare!!")
      }
    });

    return promise;
  }
}
