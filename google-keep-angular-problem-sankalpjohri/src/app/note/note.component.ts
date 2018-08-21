import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'pin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/pin.svg'));
  }

  ngOnInit() {
    console.log(window.location.pathname)
  }

}
