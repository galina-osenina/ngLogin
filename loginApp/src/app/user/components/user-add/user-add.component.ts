import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AppState } from "../../../app.state";
import { Store } from "@ngrx/store";
import * as UserActions from '../../actions/user.action'

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
        login: new FormControl(null),
        email: new FormControl(null),
      }
    )
  }

  addUser() {

  }

}
