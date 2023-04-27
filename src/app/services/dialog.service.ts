import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialogs/dialog/dialog.component';
import { DialogData } from '../Models/DialogData';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(data: DialogData) {
    this.dialog.open(DialogComponent, {
      data: data
    });
  }
}
