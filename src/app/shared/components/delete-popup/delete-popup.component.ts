import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomerApiService } from '../../../features/customers/services/customerApi.service';
import { ActivatedRoute, Router } from '@angular/router';

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
export class DeletePopupComponent {
  constructor(private customerApiService: CustomerApiService, private activatedRoute: ActivatedRoute, private router: Router){}
  @Input()
  clickYes: () => void;

  @Input()
  clickNo: () => void;

  @Input()
  description: string;

  @Input()
  title: string;
}
