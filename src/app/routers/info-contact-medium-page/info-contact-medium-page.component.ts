import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MiddleNavbarComponent } from '../../shared/components/middle-navbar/middle-navbar.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { UpdateContactMediumFormComponent } from '../../features/customers/components/update-contact-medium-form/update-contact-medium-form.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContacMediumInformationComponent } from '../../features/customers/components/contac-medium-information/contac-medium-information.component';

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
export class InfoContactMediumPageComponent{ 
  constructor(
  private router: Router,
  private activatedRoute: ActivatedRoute){}
  customerId: string;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.customerId = params['id'];
    });
    
  }
  navigateToUpdatePage() {
    this.router.navigateByUrl('/home/contact-medium/update');
  }
}

