import { SearchRequest } from './../../models/search/search-request';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { Router, RouterModule } from '@angular/router';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerApiService } from '../../services/customerApi.service';
import { first } from 'rxjs';
import { SearchApiService } from '../../services/searchApi.service';
import { SearchResponse } from '../../models/search/search-response';

@Component({
  selector: 'app-customer-search-form',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    SidebarComponent,
    RouterModule,
    TableComponent,
    ReactiveFormsModule
  ],
  templateUrl: './customer-search-form.component.html',
  styleUrl: './customer-search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerSearchFormComponent implements OnInit {
  searchForm!: FormGroup;
  searchFilterResponse: SearchResponse[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private customerApiService: CustomerApiService,
    private searchApiService : SearchApiService,
    private cdr: ChangeDetectorRef,
    private router:Router
  ) { }
  
  ngOnInit(): void {

    this.searchForm = this.formBuilder.group({
      idNumber: [""],
      customerId: [""],
      accountNumber: [""],
      gsmNumber: [""],
      orderNumber: [""],
      firstName: [""],
      lastName: [""]
    })
  }

  get disableSearchButton(): boolean {
    return !(
      this.searchForm.get("idNumber").value?.length > 3 ||
      this.searchForm.get("customerId").value?.length > 3 ||
      this.searchForm.get("accountNumber").value?.length > 3 ||
      this.searchForm.get("gsmNumber").value?.length > 3 ||
      this.searchForm.get("orderNumber").value?.length > 3 ||
      this.searchForm.get("firstName").value?.length > 0 ||
      this.searchForm.get("lastName").value?.length > 0 
    )
  }
  
  get disableClearButton(): boolean {
    return !(
      this.searchForm.get("idNumber").value?.length > 0 ||
      this.searchForm.get("customerId").value?.length > 0 ||
      this.searchForm.get("accountNumber").value?.length > 0 ||
      this.searchForm.get("gsmNumber").value?.length >0 ||
      this.searchForm.get("orderNumber").value?.length > 0 ||
      this.searchForm.get("firstName").value?.length > 0 ||
      this.searchForm.get("lastName").value?.length > 0 
    )
  }

  search() {
    const searchRequest  = {
      id : this.searchForm.get("customerId").value,
      nationalityId : this.searchForm.get("idNumber").value,
      firstName : this.searchForm.get("firstName").value,
      lastName : this.searchForm.get("lastName").value,
      orderNumber : this.searchForm.get("orderNumber").value,
      mobilePhone : this.searchForm.get("gsmNumber").value,
      accountNumber : this.searchForm.get("accountNumber").value,
    } as SearchRequest;

    this.searchApiService.getSearchResult(searchRequest).subscribe((data) => {
      this.searchFilterResponse = data
      this.cdr.detectChanges()
    })
  }

  clearForm(){
    this.searchForm.reset()
  }

  goCreateForm(){
    this.router.navigate(['/create-customer'])
  }

}

