import {WorkersEffects} from './workers/effects';
import {FlightsEffects} from '@store/flights/effects';

export const appEffects = [
  WorkersEffects,
  FlightsEffects
];
