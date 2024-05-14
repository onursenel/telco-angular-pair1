import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { Common } from '../../../../shared/models/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-customer-accounts-information',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    ButtonComponent
  ],
  templateUrl: './customer-accounts-information.component.html',
  styleUrl:'./customer-accounts-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerAccountsInformationComponent {

  mainTableHeaders: Common.Headers[] = [{label: "Account Status"}, {label: "Account Number"}, {label: "Account Name"}, {label: "Account Type"}, {label: "Action"}]
  mainTableHeaders2: Common.Headers[] = []
  mainTableRows = [
    [' Satus', 'Number','Name','Type','..'],
  ]
 

  midleTableHeaders: Common.Headers[] = [{label: "Product ID"}, {label: "Product Name Action"}, {label: "Campaign Name"}, {label: "Campaign ID"}, {label: "Action"}]
  midleTableRows = [
    ['001', 'ADSL 8MB','null','null','..'],
  ]
 
  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
