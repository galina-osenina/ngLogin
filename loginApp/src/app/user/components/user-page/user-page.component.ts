import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { UserModel } from "../../../models/user.model";
import { AppState } from "../../../app.state";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})

export class UserPageComponent implements OnInit {
  users: Observable<UserModel[]>;

  constructor(private store: Store<AppState>) {
    this.users = store.select('user')
  }

  ngOnInit(): void {
  }

}
