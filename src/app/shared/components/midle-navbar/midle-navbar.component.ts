import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'midle-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './midle-navbar.component.html',
  styleUrl: `./midle-navbar.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MidleNavbarComponent { 
}
