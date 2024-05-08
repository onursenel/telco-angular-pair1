import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  selectedElement: HTMLElement | null = null; // Seçili elementin referansını tutacak değişken
 
  changeColor(event: Event) {
    const element = event.target as HTMLElement;
    if (element && element !== this.selectedElement) {
      // Seçili eleman varsa ve tıklanan eleman önceki seçili eleman değilse
      if (this.selectedElement) {
        this.selectedElement.style.backgroundColor = 'rgba(54, 63, 105, 0.47)'; // Önceki seçili elemanın rengini sıfırla
      }
      this.selectedElement = element; // Yeni seçili elemanı güncelle
      element.style.backgroundColor = 'rgba(54, 63, 105, 0.91)'; // Tıklanan divin arka plan rengini değiştir
    }
  }
 }
