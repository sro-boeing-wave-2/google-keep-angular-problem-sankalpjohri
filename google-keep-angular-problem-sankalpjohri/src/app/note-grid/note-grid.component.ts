import { Component, OnInit } from '@angular/core';
import { NoteManagementService } from 'src/app/note-management.service'

@Component({
  selector: 'app-note-grid',
  templateUrl: './note-grid.component.html',
  styleUrls: ['./note-grid.component.css']
})
export class NoteGridComponent implements OnInit {

  constructor(private _noteService: NoteManagementService) { }

  public notes = [];
  public enableCreate = false;

  ngOnInit() {

    this._noteService.getAllNotes().subscribe(result => {
      this.notes = result.json();
    });
    console.log(this.notes);
  }

  captureDeleteEvent(event) {
    this._noteService.getAllNotes().subscribe(result => {
      this.notes = result.json();
    });
  }

  captureCreateEvent(event) {
    this._noteService.getAllNotes().subscribe(result => {
      this.notes = result.json();
    });
  }

}
