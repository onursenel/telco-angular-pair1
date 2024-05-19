import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginApiService } from '../../services/login-api.service';
import { PostLoginRequest } from '../../models/request/post-login-request';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Router } from '@angular/router';
import { ErrorMessagesPipe } from '../../../../core/pipes/error-messages.pipe';

@Component({
  selector: 'etiya-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    ErrorMessagesPipe
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {

  showError: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private loginApiService: LoginApiService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  loginForm = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]]
  });


  ngOnInit(): void { }

  login() {
    const request: PostLoginRequest = {
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password,
    };

    console.log(request)

    this.loginApiService.getLogin(request).subscribe({
      next: (response) => { 
        localStorage.setItem('token', response.access_token)
        localStorage.setItem('user_roles', 'admin')
        this.router.navigate (['customer-search'])

        console.info('Response:', response);
      },
      error: (error) => {
        this.showError = true;
        this.cdr.detectChanges();
        console.error('Error:', error);
      },
      complete: () => {
        console.info('Login has successfully');
        this.loginForm.reset();
      }
    });
  }

  onFormSubmit() {

    if (this.loginForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    this.login();
  }
}
