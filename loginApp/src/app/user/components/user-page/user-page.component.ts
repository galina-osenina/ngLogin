import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { createAction, select, Store } from "@ngrx/store";
import { UserModel } from "../../models/user.model";
import { AppState } from "../../../app.state";



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})

export class UserPageComponent implements OnInit {


  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {

  }

}
