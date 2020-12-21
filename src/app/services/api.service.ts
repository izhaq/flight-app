import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Workers} from '@store/workers/interfaces';
import {Flights} from '@store/flights/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<Workers> {
    return this.http.get<Workers>('https://interview-mock.herokuapp.com/api/workers/');
  }

  getFlightsByWorkerId(workerId: string): Observable<Flights> {
    return this.http.get<Flights>(`https://interview-mock.herokuapp.com/api/workers/${workerId}`);
  }
}
