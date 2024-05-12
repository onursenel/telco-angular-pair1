import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-configuration-product',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './configuration-product.component.html',
  styleUrl: './configuration-product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationProductComponent { 
  openPopup() {
    const myModal = document.getElementById('myModal');
    if (myModal) {
      myModal.classList.add('show');
      myModal.style.display = 'block';
      const backdrop = document.createElement('div');
      backdrop.classList.add('modal-backdrop', 'fade', 'show');
      document.body.appendChild(backdrop);
    }
  }
}
