import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MiddleNavbarComponent } from '../../shared/components/middle-navbar/middle-navbar.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { UpdateContactMediumFormComponent } from '../../features/customers/components/update-contact-medium-form/update-contact-medium-form.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { ContacMediumInformationComponent } from '../../features/customers/components/contac-medium-information/contac-medium-information.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-contact-medium-page',
  standalone: true,
  imports: [
    CommonModule,
    MiddleNavbarComponent,
    NavbarComponent,
    ContacMediumInformationComponent,
    SidebarComponent,
    RouterModule,
  ],
  templateUrl: './info-contact-medium-page.component.html',
  styleUrl:'./info-contact-medium-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoContactMediumPageComponent { 
  constructor(private router: Router) {}

  navigateToUpdatePage() {
    this.router.navigateByUrl('/info/update-contact-medium');
  }
}

