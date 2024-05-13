import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-update-customer-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './update-customer-form.component.html',
  styleUrl: './update-customer-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateCustomerFormComponent { }
