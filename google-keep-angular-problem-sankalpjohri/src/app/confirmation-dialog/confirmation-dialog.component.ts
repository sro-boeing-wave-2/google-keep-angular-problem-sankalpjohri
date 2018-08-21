import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) { }

  onClickConfirm() {
    console.log(this.dialogRef);
    this.dialogRef.close("confirmed");
  }

  onClickCancel() {
    console.log(this.dialogRef);
    this.dialogRef.close("cancelled");
  }

}
