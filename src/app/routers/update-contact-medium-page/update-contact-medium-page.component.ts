import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { MidleNavbarComponent } from '../../shared/components/midle-navbar/midle-navbar.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { UpdateContactMediumFormComponent } from '../../features/customers/components/update-contact-medium-form/update-contact-medium-form.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-update-contact-medium-page',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    MidleNavbarComponent,
    NavbarComponent,
    UpdateContactMediumFormComponent,
    ButtonComponent,
  ],
  templateUrl: './update-contact-medium-page.component.html',
  styleUrl:'./update-contact-medium-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateContactMediumPageComponent { }
