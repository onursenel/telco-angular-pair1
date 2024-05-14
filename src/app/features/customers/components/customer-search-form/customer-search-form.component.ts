import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { CustomerApiService } from '../../services/customerApi.service';

@Component({
  selector: 'app-customer-search-form',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    SidebarComponent,
    RouterModule,
    TableComponent
  ],
  templateUrl: './customer-search-form.component.html',
  styleUrl: './customer-search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerSearchFormComponent { 
  constructor(private customerApiService : CustomerApiService){}





}
