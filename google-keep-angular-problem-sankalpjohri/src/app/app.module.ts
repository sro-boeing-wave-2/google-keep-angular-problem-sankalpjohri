import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatGridListModule, MatButtonModule, MatChipsModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { NoteGridComponent } from './note-grid/note-grid.component';
import { NoteComponent } from './note/note.component';
import { HttpClientModule } from '@angular/common/http';
import { ChipViewComponent } from './chip-view/chip-view.component';
import { AppColorComponent } from './app-color/app-color.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    SearchComponent,
    NoteGridComponent,
    NoteComponent,
    ChipViewComponent,
    AppColorComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
