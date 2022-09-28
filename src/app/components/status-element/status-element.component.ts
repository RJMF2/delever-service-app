import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-element',
  templateUrl: './status-element.component.html',
  styleUrls: ['./status-element.component.scss'],
})
export class StatusElementComponent {
  //the serviceStatus Id to set the status on the Ui;
  @Input() public statusNumber: number = 0;
}
