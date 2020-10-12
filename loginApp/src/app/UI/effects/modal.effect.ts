import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, } from 'rxjs/operators';
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import * as UIActions from "../action/ui.action"
import { ModalService } from "../services/modal.service";

@Injectable()

export class UiEffects {

  constructor(
    private _actions$: Actions,
    private _modal: ModalService,
  ) {}

  @Effect()
  modalOpen$: Observable<Action> =
    this._actions$.pipe(
        ofType(UIActions.SHOW_MODAL),
        map((action: UIActions.ShowModal) => {
          const details = this._modal.open(action.payload);
          return new UIActions.ShownModal({
            modalId: '',
            modalOpen: true
          });
        }));
}
