import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { NoteManagementService } from 'src/app/note-management.service'
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note;
  @Output() deleteEmitter = new EventEmitter();
  public stateDelete = false;
  public stateEdit = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private _noteService: NoteManagementService) {
    iconRegistry.addSvgIcon(
      'pin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/pin.svg'));
  }

  ngOnInit() {
    console.log(window.location.pathname)
  }

  cardStateDelete() {
    this.stateDelete = true;
    console.log("State Delete: " + this.stateDelete);
  }

  cardStateDeleteCancel() {
    this.stateDelete = false;
    console.log("State Delete: " + this.stateDelete);
  }

  cardStateDeleteConfirm() {
    this.note.isPinned = true;
    this._noteService.deleteNote(this.note.id).subscribe(result => {
      this.deleteEmitter.emit("success");
    });
  }

  changePinnedState() {
    this.note.isPinned = !this.note.isPinned;
    this._noteService.editNote(this.note).subscribe(result => {
      this.deleteEmitter.emit("success");
    });
  }

  editNote() {
    this.stateEdit = true;
  }

}
