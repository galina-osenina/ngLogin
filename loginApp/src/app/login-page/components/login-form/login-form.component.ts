import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input()  loginForm: FormGroup;
  @Output() onLogin = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  login() {
      this.onLogin.emit()
  }

}
