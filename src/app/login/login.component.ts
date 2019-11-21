import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { CustomValidators } from '../utils/validators/formValidators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    userName: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20), CustomValidators.validateSpaceInString]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  });

  constructor() { }

  ngOnInit() {
  }

  get userName(): AbstractControl { return this.loginForm.get('userName'); }
  get userPassword(): AbstractControl { return this.loginForm.get('userPassword'); }

  onSubmit(): void {
    console.log(this.loginForm.value);
  }



}
