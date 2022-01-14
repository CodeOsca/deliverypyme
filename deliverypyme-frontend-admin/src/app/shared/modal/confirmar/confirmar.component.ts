import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Confirm } from '../../model/confirm.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: [
    './confirmar.component.css',
    '../../../shared/css/modal.css',
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Confirm
  ) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close()
  }

}
