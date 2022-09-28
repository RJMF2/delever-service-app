import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { ServicesMapComponent } from './components/services-map/services-map.component';
import { OrderStatusService } from './services/order-status.service';
import { StatusElementComponent } from './components/status-element/status-element.component';

@NgModule({
  declarations: [AppComponent, ServicesMapComponent, OrderStatusComponent, StatusElementComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoicmotbWYiLCJhIjoiY2p6ZTU2amQzMG80NzNjbjVhYzNxMXpwOSJ9.JAA67OXKi2HqoK3rijezzA', // Optional, can also be set per map (accessToken input of mgl-map)
    }),
  ],
  providers: [OrderStatusService],
  bootstrap: [AppComponent],
})
export class AppModule {}
