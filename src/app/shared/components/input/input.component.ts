import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() inputId: string = '';
  @Input() labelClasses: string = '';
  @Input() inputClasses: string = '';
  @Input() required: boolean = false;
  @Input() control: FormControl | any | null;
  passwordType: string = "password"
  showPassword: boolean = false;
  
  togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
  this.passwordType = this.showPassword ? 'text' : 'password';
}
}