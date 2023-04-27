import { Component } from '@angular/core';
import { DialogService } from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DialogSnackBar';

  constructor(private dialog: DialogService) { }

  openDialog() {
    this.dialog.openDialog({
      title: "hello",
      content: "this is my first dialog",
      type: ""
    });
  }
}
