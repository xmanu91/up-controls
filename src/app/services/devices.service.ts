import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private devices;

  constructor(private http: HttpClient) {

  }

  getDevices() {
    return this.http.get(environment.defaultLink + 'all/');
  }

  toggleDevice(deviceId: string) {
    return this.http.post(environment.defaultLink + 'toggle/', {deviceId}).subscribe(data => {
      console.log(data);
    });
  }
}
