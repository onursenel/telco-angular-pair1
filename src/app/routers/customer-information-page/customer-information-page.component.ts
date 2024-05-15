import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { MiddleNavbarComponent } from '../../shared/components/middle-navbar/middle-navbar.component';
import { Router, RouterModule } from '@angular/router';
import { CustomerInformationComponent } from '../../features/customers/components/customer-information/customer-information.component';

@Component({
  selector: 'app-customer-information-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    MiddleNavbarComponent,
    RouterModule,
    CustomerInformationComponent,
    RouterModule,
  ],
  templateUrl: './customer-information-page.component.html',
  styleUrl: './customer-information-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerInformationPageComponent {
  constructor(private router: Router) {}

  navigateToUpdatePage() {
    this.router.navigateByUrl('/');//customer update saydası gelecek
  }
  navigateToDeletePage(){
    this.router.navigateByUrl('/delete-popup');
  }
 }
