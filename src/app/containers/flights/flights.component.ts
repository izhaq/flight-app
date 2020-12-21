import { Component, OnInit } from '@angular/core';
import {FlightsFacade} from '@facades/flights.facade';
import {Observable} from 'rxjs';
import {TableConfig} from '@components/table/table.component';
import {Flight} from '@store/flights/interfaces';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  constructor(private flightsFacade: FlightsFacade) { }

  ngOnInit(): void {
  }

  get flightsConfig(): Observable<TableConfig<Flight>> {
    return this.flightsFacade.getFlightsTableConfig();
  }

  onFlightSelect(flight: Flight): void {
    this.flightsFacade.setSelectedFlight(flight);
  }

}
