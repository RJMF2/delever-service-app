import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { ServicesMapComponent } from './components/services-map/services-map.component';

const routes: Routes = [
  {
    path: 'service-selection',
    component: ServicesMapComponent,
  },
  {
    path: '',
    redirectTo: '/service-selection',
    pathMatch: 'full',
  },
  {
    path: 'order-status',
    component: OrderStatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
