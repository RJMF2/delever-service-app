import { Component } from '@angular/core';

@Component({
  selector: 'app-services-map',
  templateUrl: './services-map.component.html',
  styleUrls: ['./services-map.component.scss'],
})
export class ServicesMapComponent {
  public lat = 0;
  public lng = 0;

  // those are the services that are exist on specific place
  private services = [
    {
      name: 'كهربائي',
      lng: 31.235657230204476,
      lat: 30.04685895909824,
    },
  ];

  public filteredServices: any;

  // this function sets the lng and lat of the picked place on the map
  public mapClicked($event: any): void {
    this.lat = $event.lngLat.lat;
    this.lng = $event.lngLat.lng;
  }

  //this function filters the services that are on a specific distance from the picked location
  public selectService(): void {
    this.filteredServices = this.services.filter((service) => {
      if (service.lng < this.lng + 0.01 && service.lng > this.lng - 0.01) {
        if (service.lat < this.lat + 0.01 && service.lat > this.lat - 0.01) {
          return service;
        }
      }
      return;
    });
  }
}
