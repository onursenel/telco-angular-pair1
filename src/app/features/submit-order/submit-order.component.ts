import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-order',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './submit-order.component.html',
  styleUrl: './submit-order.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitOrderComponent {
  constructor(
    private router: Router
  ){}


  navigatePrevious(){
    this.router.navigate(["/configuration-product"])
  }
 }
