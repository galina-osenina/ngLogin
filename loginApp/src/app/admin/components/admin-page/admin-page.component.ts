import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DepartmentService } from "../../../login/services/department.service";
import {AppState} from "../../../app.state";
import { Store } from "@ngrx/store";
import * as CompanyActions from "../../../company/actions/company.action";
import * as UiActions from "../../../UI/action/ui.action";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  department;
  departments;
  company;

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.department = param['department'];
    });

    this.departmentService.getDepatrments().subscribe(res => {
      this.departments = Object.values(res).filter(el => {
        return this.department.includes(el['id'].toString());
      });
    });

    this.store.dispatch(new CompanyActions.GetCompany());
    this.store.select(s => s.company).subscribe(_company => {
      this.company = _company;
    });
  }

  showModal() {
    const dialogRef = this.dialog.open(ModalComponent);
    this.store.dispatch(new UiActions.ShowModal(true));
  }

}
