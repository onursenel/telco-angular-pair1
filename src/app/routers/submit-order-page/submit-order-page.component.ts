import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubmitOrderComponent } from '../../features/submit-order/submit-order.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-submit-order-page',
  standalone: true,
  imports: [
    CommonModule,
    SubmitOrderComponent,
    NavbarComponent
  ],
  templateUrl: './submit-order-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitOrderPageComponent { }
