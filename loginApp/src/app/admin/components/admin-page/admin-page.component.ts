import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DepartmentService } from "../../../login/services/department.service";
import {AppState} from "../../../app.state";
import { Store } from "@ngrx/store";
import * as CompanyActions from "../../../company/actions/company.action";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  department;
  departments;

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private store: Store<AppState>
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


  }

}
