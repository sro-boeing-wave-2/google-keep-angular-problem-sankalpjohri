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
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { MatExpansionModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateNoteComponent } from './create-note/create-note.component'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    SearchComponent,
    NoteGridComponent,
    NoteComponent,
    ChipViewComponent,
    AppColorComponent,
    ConfirmationDialogComponent,
    EditDialogComponent,
    CreateNoteComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
