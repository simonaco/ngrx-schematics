import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Action } from '@ngrx/store/src/models';

export interface State {
  counter: number;
}

export const reducers = (state: number = 0, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
