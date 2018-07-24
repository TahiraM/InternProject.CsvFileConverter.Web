import { FormBuilder, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Deal, DealService } from '../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deal-editor',
  templateUrl: './deal-editor.component.html',
  styleUrls: ['./deal-editor.component.css']
})
export class DealEditorComponent implements OnInit {
  deal: Deal;
  public form: FormGroup;

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
        if (dealId === '') {
          this.dealService.getDealsDetails(dealId)
            .subscribe((deal: Deal) => {
              this.deal = deal;
              this.createForm();
              this.setValues();
            });
        }
      });
  }

  createForm() {
      this.form = this.fb.group({
      v3DealId: [''],
      dealName: [''],
      eFrontDealId: [''],
      v3CompanyId: [''],
      v3CompanyName: [''],
      sectorId: [''],
      sector: [''],
      countryId: [''],
      country: [''],
      transactionTypeId: [''],
      transactionType: [''],
      transactionFees: [''],
      otherFees: [''],
      currency: [''],
      activeInActive: [''],
      exitDate: [''],
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

  newDeal() {
    this.createForm();
  }

  onSubmit() {
    const dataToSave = Object.assign({}, this.deal, this.form.value);

    this.dealService.saveDealDetails(dataToSave)
      .subscribe(m => {
        this.router.navigate(['/deals']);
      });
  }
}
