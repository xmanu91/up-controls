import { Component, OnInit } from '@angular/core';
import {DevicesService} from '../services/devices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  devices;

  constructor(private devicesService: DevicesService) {}

  async ngOnInit() {
    this.devicesService.getDevices().subscribe(data => {this.devices = data; console.log(this.devices);});
  }

  toggleButton(e: Event, deviceId: string) {
    const target = e.target;

    if(target){
      // @ts-ignore
      if (target.classList.contains('device')) {
        // @ts-ignore
        target.classList.toggle('active');
        this.toggleDevice(deviceId);
      }
      // @ts-ignore
      if(target.parentNode.classList.contains('device')) {
        // @ts-ignore
        target.parentNode.classList.toggle('active');
        this.toggleDevice(deviceId);
      }
      // @ts-ignore
      if (target.parentNode.parentNode.classList.contains('device')) {
        // @ts-ignore
        target.parentNode.parentNode.classList.toggle('active');
        this.toggleDevice(deviceId);
      }
    }
  }

  toggleDevice(deviceId: string) {
    this.devicesService.toggleDevice(deviceId);
  }
}
