import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-select-option',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './select-option.component.html',
  styleUrl: './select-option.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectOptionComponent {
  @Input() options: { value: string, label: string }[] = [];
  @Input() selectedOption: any;

  @Output() selectionChange = new EventEmitter <any>(); 
 }
