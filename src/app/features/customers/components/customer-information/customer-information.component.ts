import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customer-information',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './customer-information.component.html',
  styleUrl: './customer-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerInformationComponent { }
