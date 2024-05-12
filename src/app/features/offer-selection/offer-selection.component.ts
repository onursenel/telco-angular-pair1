import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SelectOptionComponent } from '../../shared/components/select-option/select-option.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { Common } from '../../shared/models/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-selection',
  standalone: true,
  imports: [
    CommonModule,
    SelectOptionComponent,
    InputComponent,
    ButtonComponent,
    TableComponent
  ],
  templateUrl: './offer-selection.component.html',
  styleUrl: './offer-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferSelectionComponent {
  catalogSelectionOptions = [{ value : "select1" , label:"Select1"}] //catalog selections içini bilmiyorum

  catalogTableHeaders: Common.Headers[] = [{label: "Prod Offer Id"}, {label: "Prod Offer Name"}]
  campaignTableHeaders: Common.Headers[] = [{label: "Campaign ID"}, {label: "Prod Offer ID"},{label: "Prod Offer Name"}]

  catalogTableRows = [
    ['5675', 'Apple'],
    ['2343', 'Samsung']
  ]

  campaingTableRows = [
    ['123', '345', 'Apple'],
    ['768', '453', 'Samsung']
  ]

 
 }
