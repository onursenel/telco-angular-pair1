import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ConfigurationProductComponent } from '../../features/configuration-product/configuration-product.component';

@Component({
  selector: 'app-configuration-product-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    ConfigurationProductComponent
  ],
  templateUrl: './configuration-product-page.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationProductPageComponent { }
