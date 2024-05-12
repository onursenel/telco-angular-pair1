import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';

@Component({
  selector: 'app-customer-accounts-information',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
  ],
  templateUrl: './customer-accounts-information.component.html',
  styleUrl:'./customer-accounts-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerAccountsInformationComponent {}
