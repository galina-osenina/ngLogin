import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DepartmentService } from "../../services/department.service";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  departments: Object = [];
  @Output() onLogin = new EventEmitter();
  user;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      department: new FormControl([])
    });

    this.departmentService.getDepatrments().subscribe(res => {
      this.departments = res;
    });
  }

  login() {
    this.user = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password,
      department: this.loginForm.value.department
    };

    this.onLogin.emit(this.user)
  }

}
