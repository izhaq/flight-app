import { Component, OnInit } from '@angular/core';
import {FlightsFacade} from '@facades/flights.facade';
import {Observable} from 'rxjs';
import {Flight} from '@store/flights/interfaces';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  flightInfo: Flight;
  constructor(private flightFacade: FlightsFacade) { }

  ngOnInit(): void {
    this.flightFacade.getSelectedFlight().subscribe( flight => this.flightInfo = flight);
  }

  get refreshRate(): Observable<number> {
    return this.flightFacade.getRefreshRate();
  }

}
