import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { DeletePopupComponent } from '../../shared/components/delete-popup/delete-popup.component';
import { MiddleNavbarComponent } from '../../shared/components/middle-navbar/middle-navbar.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AddressTabEditDeleteFormComponent } from '../../features/customers/components/address-tab-edit-delete-form/address-tab-edit-delete-form.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-address-tab-edit-delete',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    DeletePopupComponent,
    MiddleNavbarComponent,
    InputComponent,
    ButtonComponent,
    AddressTabEditDeleteFormComponent,
    RouterModule,


  ],
  templateUrl: './address-tab-edit-delete.component.html',
  styleUrl: `./address-tab-edit-delete.component.scss`,

})
export class AddressTabEditDeleteComponent {
  constructor(private router: Router,private activatedRoute: ActivatedRoute) {}
  customerId: string;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.customerId = params['id'];
    });
    
  }
}