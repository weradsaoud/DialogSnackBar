import { Component, Inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { SnackBarData } from '../Models/SnackBarData';
import { DialogTypes } from '../Models/DialogTypes';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData
  ) { }

  containerClass = {
    infoContainer: this.data.type === DialogTypes.info,
    successContainer: this.data.type === DialogTypes.success,
    warningContainer: this.data.type === DialogTypes.warning,
    errorContainer: this.data.type === DialogTypes.error
  }

  iconClass = {
    infoIcon: this.data.type === DialogTypes.info,
    successIcon: this.data.type === DialogTypes.success,
    warningIcon: this.data.type === DialogTypes.warning,
    errorIcon: this.data.type === DialogTypes.error
  }

  msgClass = {
    infoMsg: this.data.type === DialogTypes.info,
    successMsg: this.data.type === DialogTypes.success,
    warningMsg: this.data.type === DialogTypes.warning,
    errorMsg: this.data.type === DialogTypes.error
  }

  icon = (this.data.type === DialogTypes.error) ? 'error'
    : (this.data.type === DialogTypes.success) ? 'check_circle'
      : (this.data.type === DialogTypes.warning) ? 'warning'
        : (this.data.type === DialogTypes.info) ? 'info'
          : '';

  dismissSnackBar() {
    this.snackBarRef.dismiss();
  }
}
