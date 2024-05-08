import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { CreateContactMediumRequest } from '../../models/create-contact-medium-request';
import { Router } from '@angular/router';
import { selectContactMedium } from '../../../../shared/store/contactMediums/contact-medium.selector';
import { setContactMedium } from '../../../../shared/store/contactMediums/contact-medium.action';

@Component({
  selector: 'app-create-contact-medium-form',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './create-contact-medium-form.component.html',
  styleUrl: './create-contact-medium-form.component.scss'
})
export class CreateContactMediumFormComponent implements OnInit{
  form!: FormGroup
  constructor(
    private fb: FormBuilder,
    private store : Store<{contactMedium:CreateContactMediumRequest}>,
    private router : Router
  ){}

  ngOnInit(): void {
    this.createForm();
    this.store
      .pipe(select(selectContactMedium))
      .subscribe((contactMedium) => {
        this.form.patchValue(contactMedium);
        console.log('contactMediumState:', contactMedium);
      });
  }

  createForm(){
      this.form= this.fb.group({
      email: ['', Validators.required],
      homePhone: [''],
      mobilePhone: ['',Validators.required],
      fax: ['',Validators.required]
    });
  }
  createContactMedium(){
    const contactMedium: CreateContactMediumRequest = {
      email: this.form.value.email,
      homePhone: this.form.value.homePhone,
      mobilePhone: this.form.value.mobilePhone,
      fax: this.form.value.fax
    };
    this.store.dispatch(setContactMedium({contactMedium}));
    
  }
  onFormSubmit() {
    console.log(this.form);

    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.createContactMedium();
  }
 }
