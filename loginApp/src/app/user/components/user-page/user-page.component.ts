import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { createAction, select, Store } from "@ngrx/store";
import { UserModel } from "../../models/user.model";
import { AppState } from "../../../app.state";
import {ModalComponent} from "../../../UI/components/modal/modal.component";
import * as UiActions from "../../../UI/action/ui.action";
import { MatDialog } from "@angular/material/dialog";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})

export class UserPageComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  showModal() {
    const _data = {
      id: 'user-page-modal',
      title: 'User page modal',
      text: 'User page description',
    }

    const dialogRef = this.dialog.open(ModalComponent, {
      data: _data
    });

    this.store.dispatch(new UiActions.ShowModal({
      modalId: _data.id,
      modalOpen: true
    }));

    dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(new UiActions.CloseModal({
        modalId: '',
        modalOpen: false
      }));
    });
  }
}
