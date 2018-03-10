import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { customPasswordValidator } from '../shared/customValidator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userForm: FormGroup;
  username: String;
  password: String;
  userErrors: Array<String>;
  passwordErrors: Array<String>;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
    this.userErrors = [];
    this.passwordErrors = [];
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          customPasswordValidator,
        ]
      ]
    });
  }

  onSubmit() {
    this.userErrors = Object.keys(this.userForm.controls.username.errors || {});
    this.passwordErrors = Object.keys(this.userForm.controls.password.errors || {});
  }
}
