import { NoteManagementService } from '../note-management.service';
import { MatFormFieldModule } from '@angular/material';
import { MatChipInput } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  @Output() createEmitter = new EventEmitter();

  public showCheckListCreate = false;
  public enableCreate = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public labels = [];
  public checkList = [];
  public note = { labels: this.labels, checkList: this.checkList }

  constructor(private _noteService: NoteManagementService) { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.labels.push({ text: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(label): void {
    const index = this.labels.indexOf(label);

    if (index >= 0) {
      this.labels.splice(index, 1);
    }
  }

  enableCreateCard() {
    this.enableCreate = true;
  }

  showCheckList() {
    this.showCheckListCreate = true;
    console.log(this.note);
  }

  showCreateNote() {
    this.showCheckListCreate = false;
    console.log(this.note);
  }

  addCheckListItem() {
    this.checkList.push({ text: "", isChecked: false });
  }

  onSaveButtonClick() {
    this._noteService.createNote(this.note).subscribe(result => {
      this.enableCreate = false;
      this.createEmitter.emit("created");
    });
  }

  cancelCreate() {
    this.note = {labels: this.labels, checkList: this.checkList};
    this.enableCreate = false;
  }

}
