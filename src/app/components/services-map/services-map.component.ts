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
      name: 'كهرباء',
      lng: 31.235657230204476,
      lat: 30.04685895909824,
    },
    {
      name: 'سيارات',
      lng: 31.24826709202378,
      lat: 30.03652739018861,
    },
    {
      name: 'سباكة',
      lng: 31.239905804774395,
      lat: 30.02975076490054,
    },
    {
      name: 'مياة',
      lng: 31.227719673359815,
      lat: 30.043226552843507,
    },
    {
      name: 'كومبيوتر',
      lng: 31.216558251047303,
      lat: 30.056069752845758,
    },
    {
      name: 'منظفات',
      lng: 31.210954409592944,
      lat: 30.038437637801962,
    },
    {
      name: 'اثاث',
      lng: 31.19835306988341,
      lat: 30.04990527369189,
    },
  ];

  public filteredServices: any;

  // this function sets the lng and lat of the picked place on the map
  public mapClicked($event: any): void {
    this.lat = $event.lngLat.lat;
    this.lng = $event.lngLat.lng;
    console.log(this.lng, this.lat);
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
