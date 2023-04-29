import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialogs/dialog/dialog.component';
import { DialogData } from '../Models/DialogData';
import { DialogTypes } from '../Models/DialogTypes';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  dialogConfig = {
    width: '60%',
    height: '40%'
  };

  info(data: { title: string; content: string; }) {
    this.openDialog({ ...data, type: DialogTypes.info });
  }

  success(data: { title: string; content: string; }) {
    this.openDialog({ ...data, type: DialogTypes.success });
  }

  warning(data: { title: string; content: string; }) {
    this.openDialog({ ...data, type: DialogTypes.warning });
  }

  error(data: { title: string; content: string; }) {
    this.openDialog({ ...data, type: DialogTypes.error });
  }

  private openDialog(data: DialogData) {
    this.dialog.open(DialogComponent, {
      data: data,
      ...this.dialogConfig
    });
  }
}
