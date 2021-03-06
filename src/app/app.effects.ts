import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { MoviesService } from './services/movies.service';
// import * as MovieActions from './actions/movie.actions';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private moviesService: MoviesService) {}
}
