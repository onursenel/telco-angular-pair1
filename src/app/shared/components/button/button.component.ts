import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit{
 
  @Input() type: string=''
  @Input() buttonClasses: string=''
  @Input() isDisable: boolean = false

  ngOnInit(): void {
   console.log(this.buttonClasses)
  }
  
 }
