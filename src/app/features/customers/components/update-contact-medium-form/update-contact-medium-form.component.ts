import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { InputComponent } from '../../../../shared/components/input/input.component';

@Component({
  selector: 'app-update-contact-medium-form',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
  ],
  templateUrl: './update-contact-medium-form.component.html',
  styleUrl:'./update-contact-medium-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateContactMediumFormComponent { 


}
