import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'delete-popup',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './delete-popup.component.html',
  styleUrl: `./delete-popup.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeletePopupComponent { }
