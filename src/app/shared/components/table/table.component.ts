import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Common } from '../../models/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class TableComponent implements OnInit{
  
  @Input()
  headers: Common.Headers[]= [{label: "header 1"}, {label: "header 2"}, ];

  @Input() rows: any[] = [];
  @Input() showLeftIcon: boolean=false;
  ngOnInit(): void {
    console.log(this.headers)
  }
}
