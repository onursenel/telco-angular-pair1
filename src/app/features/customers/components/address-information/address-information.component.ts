import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {  RouterModule } from '@angular/router';
import { CreateAddressFormComponent } from '../create-address-form/create-address-form.component';
import { GetListResponse } from '../../../../shared/models/get-list-response';
import { AddressListResponse } from '../../models/address/address-list-response';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressApiService } from '../../services/addressApi.service';

@Component({
  selector: 'etiya-address-information',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RouterModule,
    CreateAddressFormComponent
  ],
  templateUrl: './address-information.component.html',
  styleUrl: './address-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressInformationComponent {

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
  isMenu1Open = false;
  isMenu2Open = false;

  toggleMenu(menuNumber: number) {
    if (menuNumber === 1) {
      this.isMenu1Open = !this.isMenu1Open;
      this.isMenu2Open = false; // Kapatılması gereken diğer menüyü kapat
    } else if (menuNumber === 2) {
      this.isMenu2Open = !this.isMenu2Open;
      this.isMenu1Open = false; // Kapatılması gereken diğer menüyü kapat
    }
  }

  closeMenu() {
    this.isMenu1Open = false;
    this.isMenu2Open = false;
  }
  

  
}
