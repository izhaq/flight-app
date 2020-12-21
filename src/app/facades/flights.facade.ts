import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '@store/interfaces.main';
import {ColumnConfig, TableConfig} from '@components/table/table.component';
import {map} from 'rxjs/operators';
import {Flight, Flights, FlightsTypesNames} from '@store/flights/interfaces';
import {selectCurrentFlight, selectFlights, selectTimeUntilNextRefresh} from '@store/flights/reducers';

const  flightsColumns: Array<ColumnConfig<Flight>> = [
  { key: 'num', label: 'Flight Number' },
  { key: 'from', label: 'Origin' },
  { key: 'from_date', label: 'Original Date' },
  { key: 'to', label: 'Destination' },
  { key: 'to_date', label: 'Destination Date' },
];

@Injectable({
  providedIn: 'root'
})
export class FlightsFacade {

  constructor(private store: Store<AppState>) { }

  getSelectedFlight(): Observable<Flight> {
    return this.store.pipe(select(selectCurrentFlight));
  }

  getFlights(): Observable<Flights> {
    return this.store.pipe(select(selectFlights));
  }

  getFlightsTableConfig(): Observable<TableConfig<Flight>> {
    return this.getFlights().pipe(map( data => ({ data, columns: flightsColumns })) );
  }

  setSelectedFlight(flight: Flight): void {
    this.store.dispatch({ type: FlightsTypesNames.SET_SELECTED_FLIGHT, selectedFlight: flight });
  }

  getRefreshRate(): Observable<number> {
    return  this.store.pipe(select(selectTimeUntilNextRefresh));
  }
}
