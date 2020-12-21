import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, map, mergeMap, switchMap} from 'rxjs/operators';
import { timer} from 'rxjs';
import {ApiService} from '@services/api.service';
import {getFlights, setSelectedFlight, setFlights, setWorkerId, setTimer, resetTimer} from './actions';
import {setWorker} from '@store/workers/actions';
import {Flight} from '@store/flights/interfaces';

@Injectable()
export class FlightsEffects {
  setFlightWorkerId = createEffect(() =>
    this.actions$.pipe(
      ofType(setWorker.type),
      concatMap(( { worker: { id: workerId } } ) =>
        {
          return [
            setWorkerId( { workerId }),
            getFlights({ workerId })
          ];
        }
      )
    )
  );

  getFlightByWorkerId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setWorkerId.type),
      switchMap(({ workerId }) =>
        timer(0, 60000).pipe(
          mergeMap((A) =>
            this.apiService.getFlightsByWorkerId(workerId).pipe(
              mergeMap( (flights) =>
                {
                  const [selectedFlight = {} as Flight] = flights;
                  return [
                    setFlights({ flights }),
                    setSelectedFlight({ selectedFlight }),
                    resetTimer()
                  ];
                }
              )
            )
          )
        )
      )
    )
  );

  setTimer = createEffect(() =>
    this.actions$.pipe(
      ofType(resetTimer.type),
      switchMap(() =>
        timer(0, 1000).pipe(
          map((time) => setTimer({ time: 60 - time })),
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
