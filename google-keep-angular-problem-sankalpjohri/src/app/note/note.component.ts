import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog) {
    iconRegistry.addSvgIcon(
      'pin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/pin.svg'));
  }

  ngOnInit() {
    console.log(window.location.pathname)
  }

  openConfirmationDialog() {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      position: "center"
    });
    console.log(this.dialog);
    console.log(this.dialogRef);
    this.dialogRef.afterClosed().subscribe(result => {
      if (result === "confirmed") {
        console.log("Note deleted successfully.")
      } else if (result === "cancelled") {
        console.log("Operation Cancelled")
      }
    });
  }

}
