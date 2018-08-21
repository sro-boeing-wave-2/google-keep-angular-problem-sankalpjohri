import { Component, OnInit } from '@angular/core';
import { NoteManagementService } from 'src/app/note-management.service'

@Component({
  selector: 'app-note-grid',
  templateUrl: './note-grid.component.html',
  styleUrls: ['./note-grid.component.css']
})
export class NoteGridComponent implements OnInit {

  constructor(private _noteService: NoteManagementService) { }

  ngOnInit() {
    public notes = this._noteService.getAllNotes();
    console.log(notes);
  }

}
