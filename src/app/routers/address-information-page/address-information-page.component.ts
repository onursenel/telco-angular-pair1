import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { AddressInformationComponent } from '../../features/addresses/components/address-information/address-information.component';

@Component({
  selector: 'app-address-information-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    AddressInformationComponent
  ],
  templateUrl: './address-information-page.component.html',
  styleUrl: './address-information-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressInformationPageComponent { }
