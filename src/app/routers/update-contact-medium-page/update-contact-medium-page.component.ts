import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { MiddleNavbarComponent } from '../../shared/components/middle-navbar/middle-navbar.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { UpdateContactMediumFormComponent } from '../../features/customers/components/update-contact-medium-form/update-contact-medium-form.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-contact-medium-page',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    MiddleNavbarComponent,
    NavbarComponent,
    UpdateContactMediumFormComponent,
    ButtonComponent,
    RouterModule,
  ],
  templateUrl: './update-contact-medium-page.component.html',
  styleUrl:'./update-contact-medium-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateContactMediumPageComponent { }
