import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {  RouterModule } from '@angular/router';
import { CreateAddressFormComponent } from '../create-address-form/create-address-form.component';

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



  //hamburger menu eklenecek
  //select as a primary kısmının arka planı çok uzun onu düzenle!
  //app routes kısmında children yapısını kullan ve ona göre düzenle!
  //create customer sayfasındaki inputlar sağda solda ayrık bir şekilde düzensizler. Bunu düzenle!
  
}
