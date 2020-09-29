import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DepartmentService } from "../../../login/services/department.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  department;
  departments;

  constructor(private route: ActivatedRoute, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.department = param['department'];
    });

    this.departmentService.getDepatrments().subscribe(res => {
      this.departments = Object.values(res).filter(el => {
        return this.department.includes(el['id'].toString());
      });
    })
  }

}
