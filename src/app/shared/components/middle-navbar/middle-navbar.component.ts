import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'middle-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './middle-navbar.component.html',
  styleUrl: `./middle-navbar.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiddleNavbarComponent { 
  @Input()
  customerId: string;
  constructor(private router: Router) {}

  navigateToPage(page: string) {
    this.router.navigateByUrl('/home/'+page +"/"+this.customerId);
  }
  
}
