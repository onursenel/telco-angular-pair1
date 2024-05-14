import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
export class CustomerSearchFormComponent implements OnInit{ 
  searchForm! : FormGroup;
  constructor(
    private formBuilder:FormBuilder
  ){}
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      idNumber: ["",Validators.min(4)],
      customerId: ["",Validators.min(4)],
      accountNumber: ["",Validators.min(4)],
      gsmNumber: ["",Validators.min(4)],
      orderNumber: ["",Validators.min(4)]
    })
  }
}
