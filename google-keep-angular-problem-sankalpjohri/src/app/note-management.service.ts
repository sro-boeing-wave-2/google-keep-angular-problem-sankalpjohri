import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteManagementService {

  private _noteList = [
    {
      id: "dgkjewhfcbriuhndoiuahpo",
      title: "Test Note 1",
      text: "Description for test note 1",
      isPinned: true,
      labels: [
        {text: "Label 1"},
        {text: "Label 2"}
      ],
      checkList: [
        {
          text: "Checklist item 1",
          isChecked: false
        },
        {
          text: "Checklist item 2",
          isChecked: true
        }
      ]
    },
    {
      id: "hjdsfkacmefiouahdlfuicmodaium",
      title: "Test Note 2",
      text: "Description for test note 2",
      isPinned: false,
      labels: [
        {text: "Label 3"},
        {text: "Label 4"}
      ],
      checkList: [
        {
          text: "Checklist item 3",
          isChecked: false
        },
        {
          text: "Checklist item 4",
          isChecked: true
        }
      ]
    }
  ];

  constructor() { }

  getAllNotes() {
    return this._noteList;
  }

  getNoteById(id: string) {
    let result = {};
    this._noteList.forEach(note => {
      if (note.id === id) {
        result = note;
      }
    });
    return result;
  }

  createNote(note) {
    this._noteList.push(note);
  }

  editNote() {

  }

  deleteNote(id: string) {
    var index = 0, count = 0;
    this._noteList.forEach(note => {
      if (note.id === id) {
        index = count;
      }
      count++;
    });
    this._noteList.splice(index, 1);
  }
}
