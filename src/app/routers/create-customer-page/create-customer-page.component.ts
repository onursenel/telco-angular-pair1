import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CreateCustomerFormComponent } from '../../features/customers/components/create-customer-form/create-customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-customer-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CreateCustomerFormComponent,
    ButtonComponent,
  ],
  templateUrl: './create-customer-page.component.html',
  styleUrl: './create-customer-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCustomerPageComponent { }
