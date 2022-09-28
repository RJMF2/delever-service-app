import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OrderStatusService {
  // those should be the initial state for the servant when moving so and they should be received from the back-end
  private lng = 31.235657230204476;
  private lat = 30.04685895909824;
  private currentServantLocation = new BehaviorSubject({
    lng: this.lng,
    lat: this.lat,
  });

  public currentServantLocation$ = this.currentServantLocation.asObservable();

  public getCurrentServiceStatus(serviceId: string) {
    //this should call a back-end endpoint to get the current status of a service using its id
    return {
      serviceId,
      statusName: 'في الطريق',
      statusId: 2,
    };
  }

  public emitNewLocation() {
    //this method just updates the location to simulate getting the location from the api each period of time
    setInterval(() => {
      this.lng -= 0.000002;
      this.lat -= 0.000002;
      this.currentServantLocation.next({
        lng: this.lng,
        lat: this.lat,
      });
    }, 1000);
  }
}
