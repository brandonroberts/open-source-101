import { Movie } from '../models';

export type State = Movie[];

export function reducer(state: State = [], action) {
  switch (action.type) {
    case 'MOVIES_LOADED_SUCCESS': {
      return action.movies;
    }
    
    default: {
      return state;
    }
  }
}
