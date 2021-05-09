import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
    });
  }
  login(): void {
    localStorage.setItem('isLoggedIn', 'Yes');
    this.route.navigate(['home']);
  }

  goToHome(): void {
    this.route.navigate(['home']);
  }

  getControlValidationClasses(control: AbstractControl): object {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }


}
