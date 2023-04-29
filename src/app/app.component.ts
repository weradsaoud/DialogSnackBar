import { Component } from '@angular/core';
import { DialogService } from './services/dialog.service';
import { DialogTypes } from './Models/DialogTypes';
import { SnackbarService } from './services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DialogSnackBar';

  constructor(
    private dialog: DialogService,
    private snackBar: SnackbarService) {

  }

  info() {
    this.dialog.info({
      title: 'This is info dialog',
      content: 'This is the content of the info dialog.'
    });
  }

  success() {
    this.dialog.success({
      title: 'This is success dialog',
      content: 'This is the content of the success dialog.'
    });
  }

  warning() {
    this.dialog.warning({
      title: 'This is warning dialog',
      content: 'This is the content of the warning dialog.'
    });
  }

  error() {
    this.dialog.error({
      title: 'This is error dialog',
      content: 'This is the content of the error dialog.'
    });
  }

  snackInfo() {
    this.snackBar.info({ msg: "this is snack bar info." });
  }

  snackSuccess() {
    this.snackBar.success({ msg: "this is snack bar success." });
  }

  snackWarning() {
    this.snackBar.warning({ msg: "this is snack bar warning." });
  }

  snackError() {
    this.snackBar.error({ msg: "this is snack bar error." });
  }
}
