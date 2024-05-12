import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { CustomerSearchFormComponent } from '../../features/customers/components/customer-search-form/customer-search-form.component';

@Component({
  selector: 'etiya-customer-search-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    InputComponent,
    ButtonComponent,
    SidebarComponent,
    CustomerSearchFormComponent
  ],
  templateUrl: './customer-search-page.component.html',
  styleUrl: './customer-search-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerSearchPageComponent { }
