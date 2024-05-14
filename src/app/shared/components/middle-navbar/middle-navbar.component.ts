import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'middle-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './middle-navbar.component.html',
  styleUrl: `./middle-navbar.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiddleNavbarComponent { 
  
}
