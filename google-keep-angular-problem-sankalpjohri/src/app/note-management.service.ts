import { RequestMethod } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteManagementService {

  private url = "http://localhost:5000/api/note"
  private _noteList;

  constructor(private _client: Http) { }

  getAllNotes() {
    this._noteList = this._client.get(this.url);
    console.log(this._noteList);
    return this._noteList;
  }

  getNoteById(id: string) {
    return this._client.get(this.url + "/" + id);
  }

  createNote(note) {
    return this._client.post(this.url, note);
  }

  editNote(note) {
    return this._client.put(this.url + "/" + note.id, note);
  }

  deleteNote(id: string) {
    return this._client.delete(this.url + "?ids=" + id);
  }
}
