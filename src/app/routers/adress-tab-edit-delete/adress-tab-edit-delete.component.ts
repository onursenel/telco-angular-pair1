import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { DeletePopupComponent } from '../../shared/components/delete-popup/delete-popup.component';
import { MidleNavbarComponent } from '../../shared/components/midle-navbar/midle-navbar.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AddressInformationComponent } from '../../features/addresses/components/address-information/address-information.component';
import { AdressTabEditDeleteFormComponent } from '../../features/addresses/components/adress-tab-edit-delete-form/adress-tab-edit-delete-form.component';

@Component({
  selector: 'app-adress-tab-edit-delete',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    DeletePopupComponent,
    MidleNavbarComponent,
    InputComponent,
    ButtonComponent,
    AdressTabEditDeleteFormComponent,


  ],
  templateUrl: './adress-tab-edit-delete.component.html',
  styleUrl: `./adress-tab-edit-delete.component.scss`,

})
export class AdressTabEditDeleteComponent {
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
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}