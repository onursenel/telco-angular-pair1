import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '../../../../shared/components/input/input.component';

@Component({
  selector: 'app-contac-medium-information',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
  ],
  templateUrl: './contac-medium-information.component.html',
  styleUrl:'./contac-medium-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContacMediumInformationComponent {

 }
