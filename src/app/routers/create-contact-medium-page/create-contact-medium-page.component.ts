import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CreateContactMediumFormComponent } from '../../features/customers/components/create-contact-medium-form/create-contact-medium-form.component';

@Component({
  selector: 'app-create-contact-medium-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CreateContactMediumFormComponent
  ],
  templateUrl: './create-contact-medium-page.component.html',
  styleUrl: './create-contact-medium-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateContactMediumPageComponent { }
