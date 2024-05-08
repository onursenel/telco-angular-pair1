import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityApiService } from '../../services/city-api.service';
import { PostCityRequest } from '../../models/request/post-city-request';

@Component({
  selector: 'app-cities-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cities-list.component.html',
  styleUrl: './cities-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesListComponent implements OnInit{
  
  cityForm: FormGroup = this.formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.minLength(2)]
    ]
    
  });

  constructor(
    private formBuilder: FormBuilder,
    private cityApiService: CityApiService,
  ) { }

  ngOnInit(): void {
    this.cityForm = this.formBuilder.group({

      name: ['', Validators.required],
      
    })
  }
  createCity() {
    const request: PostCityRequest = {
      name: this.cityForm.value.name,
    };

    this.cityApiService.postCity(request).subscribe({
      next: (response) => {
        console.info('Response:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.info('City created.');
        this.cityForm.reset();
      }
    });
  }

  onFormSubmit() {
    console.log(this.cityForm);

    if (this.cityForm.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.createCity();
  }
 }
