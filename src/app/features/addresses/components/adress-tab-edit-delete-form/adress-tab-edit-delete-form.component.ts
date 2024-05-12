import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { CreateAddressFormComponent } from '../create-address-form/create-address-form.component';
import { ToggleMenuComponent } from '../../../../shared/components/toggle-menu/toggle-menu.component';


@Component({
  selector: 'app-adress-tab-edit-delete-form',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    CreateAddressFormComponent,
    ToggleMenuComponent
  ],
  templateUrl: './adress-tab-edit-delete-form.component.html',
  styleUrl: './adress-tab-edit-delete-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdressTabEditDeleteFormComponent { 
  openPopup() {
    const myModal = document.getElementById('myModal');
    if (myModal) {
      myModal.classList.add('show');
      myModal.style.display = 'block';
      const backdrop = document.createElement('div');
      backdrop.classList.add('modal-backdrop', 'fade', 'show');
      document.body.appendChild(backdrop);
    }
  }
 
}

