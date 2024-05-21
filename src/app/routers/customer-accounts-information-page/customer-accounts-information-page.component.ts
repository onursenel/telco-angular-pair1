import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { DeletePopupComponent } from '../../shared/components/delete-popup/delete-popup.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CustomerAccountsInformationComponent } from '../../features/customers/components/customer-accounts-information/customer-accounts-information.component';
import { MiddleNavbarComponent } from '../../shared/components/middle-navbar/middle-navbar.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-accounts-information-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    DeletePopupComponent,
    MiddleNavbarComponent,
    InputComponent,
    ButtonComponent,
    CustomerAccountsInformationComponent,
    RouterModule,
  ],
  templateUrl: './customer-accounts-information-page.component.html',
  styleUrl:'./customer-accounts-information-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerAccountsInformationPageComponent {
  constructor(private router: Router,private activatedRoute: ActivatedRoute) {}
  customerId: string;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.customerId = params['id'];
    });
    
  }
 }
