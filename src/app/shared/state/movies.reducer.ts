import { Movie } from '../models';

export type State = Movie[];

export function reducer(state: State = [], action) {
  switch (action.type) {
    case '[Movie Search/API] Search Success': {
      return action.movies;
    }
    
    default: {
      return state;
    }
  }
}
