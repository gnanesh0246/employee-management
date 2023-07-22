import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-delete-dialog',
  templateUrl: './employee-delete-dialog.component.html',
  styleUrls: ['./employee-delete-dialog.component.css']
})
export class EmployeeDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EmployeeDeleteDialogComponent>) { }

  cancel(): void {
    this.dialogRef.close(false);
  }

  ok(): void {
    this.dialogRef.close(true);
  }

}
