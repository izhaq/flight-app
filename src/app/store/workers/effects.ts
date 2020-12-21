import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, mergeMap} from 'rxjs/operators';
import {ApiService} from '@services/api.service';
import {getWorkers, setWorker, setWorkers} from './actions';
import {Worker} from '@store/workers/interfaces';

@Injectable()
export class WorkersEffects {
  getWorkers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWorkers.type),
      mergeMap(() =>
        this.apiService.getWorkers().pipe(
          concatMap( (workers) =>
          {
            const [worker = {} as Worker] = workers;
            return [
              setWorkers({ workers }),
              setWorker( { worker })
            ];
          }
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
