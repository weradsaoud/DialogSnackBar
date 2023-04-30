import { Injectable } from '@angular/core';
import { DialogTypes } from '../Models/DialogTypes';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { SnackBarData } from '../Models/SnackBarData';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  snackBarConfig = {
    width: '60%',
    height: '40%'
  };

  snackBarRef?: MatSnackBarRef<SnackbarComponent>;

  info(data: { msg: string }) {
    this.openSnack({ ...data, type: DialogTypes.info });
  }

  success(data: { msg: string }) {
    this.openSnack({ ...data, type: DialogTypes.success });
  }

  warning(data: { msg: string }) {
    this.openSnack({ ...data, type: DialogTypes.warning });
  }

  error(data: { msg: string }) {
    this.openSnack({ ...data, type: DialogTypes.error });
  }

  private openSnack(data: SnackBarData) {
    this.snackBarRef = this.snackBar.openFromComponent(SnackbarComponent, {
      data: data,
      duration: 3000
    });
  }


}
