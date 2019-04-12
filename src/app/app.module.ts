import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatCardModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SearchMoviesPageComponent } from './components/search-movies-page/search-movies-page.component';
import { SearchMoviesBoxComponent } from './components/search-movies-box/search-movies-box.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListItemComponent } from './components/movies-list-item/movies-list-item.component';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './shared/state';

@NgModule({
  declarations: [
    AppComponent,
    SearchMoviesPageComponent,
    SearchMoviesBoxComponent,
    MoviesListComponent,
    MoviesListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
