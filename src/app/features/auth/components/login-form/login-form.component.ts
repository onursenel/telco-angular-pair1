import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginApiService } from '../../services/login-api.service';
import { PostLoginRequest } from '../../models/request/post-login-request';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'etiya-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {

/*
  loginForm: FormGroup = this.formBuilder.group({
    userName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.email],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)]
    ]
  });
*/
loginForm: FormGroup ;

  constructor(
    private formBuilder: FormBuilder,
    private loginApiService: LoginApiService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      userName: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(2), Validators.maxLength(20)]
    });
  }
  login() {
    const request: PostLoginRequest = {
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password,
    };

    this.loginApiService.postLogin(request).subscribe({
      next: (response) => {
        console.info('Response:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.info('Login has successfully');
        this.loginForm.reset();
      }
    });
  }

  onFormSubmit() {
    console.log(this.loginForm);

    if (this.loginForm.invalid) {
      console.error('Form is invalid');
      return;
    }
    
    this.login();
  }
}
