import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/Models/DialogData';
import { DialogTypes } from 'src/app/Models/DialogTypes';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  okBtnClass = {
    info: this.data.type === DialogTypes.info,
    success: this.data.type === DialogTypes.success,
    warning: this.data.type === DialogTypes.warning,
    error: this.data.type === DialogTypes.error
  }

  iconClass = {
    infoIcon: this.data.type === DialogTypes.info,
    successIcon: this.data.type === DialogTypes.success,
    warningIcon: this.data.type === DialogTypes.warning,
    errorIcon: this.data.type === DialogTypes.error
  }

  icon = (this.data.type === DialogTypes.error) ? 'error'
    : (this.data.type === DialogTypes.success) ? 'check_circle'
      : (this.data.type === DialogTypes.warning) ? 'warning'
        : (this.data.type === DialogTypes.info) ? 'info'
          : '';
}
