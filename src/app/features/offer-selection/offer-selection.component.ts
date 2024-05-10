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

  tableHeaders: Common.Headers[] = [{label: "Prod Offer Id"}, {label: "Prod Offer Name"}]

 
 }
