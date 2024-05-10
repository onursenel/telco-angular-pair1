import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { OfferSelectionComponent } from '../../features/offer-selection/offer-selection.component';

@Component({
  selector: 'app-offer-selection-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    OfferSelectionComponent
  ],
  templateUrl: './offer-selection-page.component.html',
  styleUrl: './offer-selection-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferSelectionPageComponent { }
