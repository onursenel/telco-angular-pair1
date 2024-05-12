import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'midle-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './midle-navbar.component.html',
  styleUrl: `./midle-navbar.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MidleNavbarComponent { 
  selectedElement: HTMLElement | null = null; // Seçili elementin referansını tutacak değişken

  changeColor(event: Event) {
    const element = event.target as HTMLElement;
    if (element && element !== this.selectedElement) {
      // Seçili eleman varsa ve tıklanan eleman önceki seçili eleman değilse
      if (this.selectedElement) {
        this.selectedElement.style.backgroundColor = '#D9D9D9'; // Önceki seçili elemanın rengini sıfırla
      }
      this.selectedElement = element; // Yeni seçili elemanı güncelle
      element.style.backgroundColor = '#C8CFF4'; // Tıklanan divin arka plan rengini değiştir
    }
  }
}
