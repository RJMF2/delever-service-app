import { Component, OnInit } from '@angular/core';
import { OrderStatusService } from 'src/app/services/order-status.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
})
export class OrderStatusComponent implements OnInit {
  constructor(private readonly orderStatusService: OrderStatusService) {}
  public ngOnInit(): void {
    this.getCurrentServiceStatus();
  }

  public currentServantLocation: any;

  private service = {
    id: '1',
    serviceName: 'كهربائي',
    //another service details
  };
  public serviceStatus: any;

  // this function sets the  the service status and call the location tracking function
  public getCurrentServiceStatus() {
    this.serviceStatus = this.orderStatusService.getCurrentServiceStatus(
      this.service.id
    );

    this.getCurrentServantLocation();
    // api location change simulation;
    this.orderStatusService.emitNewLocation();
  }

  //this function sets the current servant location variable
  public getCurrentServantLocation() {
    this.orderStatusService.currentServantLocation$.subscribe((value) => {
      this.currentServantLocation = value;
    });
  }

  public cancelService(): void {
    //this should call the end point for canceling the service
  }

  public callServant(): void {
    //this should call the servant
  }

  public rollBack(): void {
    //this function should roll back the service
  }
}
