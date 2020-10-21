import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { createAction, select, Store } from "@ngrx/store";
import { UserModel } from "../../models/user.model";
import { AppState } from "../../../app.state";
import {ModalComponent} from "../../../UI/components/modal/modal.component";
import * as UiActions from "../../../UI/action/ui.action";
import { MatDialog } from "@angular/material/dialog";
import { role } from "../../../shared/decorators/role.decorator";
import * as UIActions from "../../../UI/action/ui.action";


@role('user')
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
    this.store.dispatch(new UIActions.ShowModal({
      id: 'user-page-modal',
      title: 'User page modal',
      text: 'User page description',
    }))
  }
}
