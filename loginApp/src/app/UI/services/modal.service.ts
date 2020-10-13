import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from "../../app.state";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ModalComponent } from "../components/modal/modal.component";
import * as UIActions from "../action/ui.action"

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  private _modalRef: MatDialogRef<any>;

  constructor(
    private _dialog: MatDialog,
    private _store: Store<AppState>
  ) { }

  public open(options) {
    this._modalRef = this._dialog.open(ModalComponent, {
      data: options
    });

    this._modalRef.afterClosed().subscribe(result => {
      this._store.dispatch(new UIActions.CloseModal())
    });
  }



}
