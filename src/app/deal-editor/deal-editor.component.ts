import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Deal, DealService } from '../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deal-editor',
  templateUrl: './deal-editor.component.html',
  styleUrls: ['./deal-editor.component.css']
})
export class DealEditorComponent implements OnInit {
  form: FormGroup;
  deal: Deal;

  constructor(
    private dealService: DealService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params
      .subscribe(param => {
        const dealId = param['dealId'];
        if (dealId) {
          this.dealService.getDealsDetails(dealId)
            .subscribe((deal: Deal) => {
              this.deal = deal;
              this.setValues();
            });
        }
      });
  }

  createForm() {
      this.form = this.fb.group({
      v3DealId: new FormControl(''),
      dealName: new FormControl(''),
      eFrontDealId: new FormControl(''),
      v3CompanyId: new FormControl(''),
      v3CompanyName: new FormControl(''),
      sectorId: new FormControl(''),
      sector: new FormControl(''),
      countryId: new FormControl(''),
      country: new FormControl(''),
      transactionTypeId: new FormControl(''),
      transactionType: new FormControl(''),
      transactionFees: new FormControl(''),
      otherFees: new FormControl(''),
      currency: new FormControl(''),
      activeInActive: new FormControl(''),
      exitDate: new FormControl(''),
    });
  }

  setValues() {
    if (this.deal) {
        this.form.reset({
        v3DealId: this.deal.v3DealId,
        dealName: this.deal.dealName,
        eFrontDealId: this.deal.eFrontDealId,
        v3CompanyId: this.deal.v3CompanyId,
        v3CompanyName: this.deal.v3CompanyName,
        sectorId: this.deal.sectorId,
        sector: this.deal.sector,
        countryId: this.deal.countryId,
        country: this.deal.country,
        transactionTypeId: this.deal.transactionTypeId,
        transactionType: this.deal.transactionType,
        transactionFees: this.deal.transactionFees,
        otherFees: this.deal.otherFees,
        currency: this.deal.currency,
        activeInActive: this.deal.activeInActive,
        exitDate: this.deal.exitDate
      });
    }
  }

  onSubmit() {
    const dataToSave = Object.assign({}, this.deal);

    this.dealService.saveDealDetails(dataToSave)
      .subscribe(m => {
        this.router.navigate(['/deals']);
      });
  }
}
