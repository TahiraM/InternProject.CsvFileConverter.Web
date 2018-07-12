import { FormBuilder } from '@angular/forms';
import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { Deal, DealService } from '../core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deal-editor',
  templateUrl: './deal-editor.component.html',
  styleUrls: ['./deal-editor.component.css']
})
export class DealEditorComponent implements OnInit {
  deal: Deal;
  customForm: any;

  constructor(private dealService: DealService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params
      .subscribe(param => {
        const dealId = param['dealId'];
        if (dealId) {
          this.dealService.getDealsDetails(dealId)
            .subscribe((deal: Deal) => this.deal = deal);
        }
      });
  }

  createForm() {
      this.customForm = this.fb.group({
      v3DealId: [null],
      dealName: [null],
      eFrontDealId: [null],
      v3CompanyId: [null],
      v3CompanyName: [null],
      sectorId: [null],
      sector: [null],
      countryId: [null],
      country: [null],
      transactionTypeId: [null],
      transactionType: [null],
      transactionFees: [null],
      otherFees: [null],
      currency: [null],
      activeInActive: [null],
      exitDate: [null]
    });
  }

  setValues() {
    if (this.deal) {
        this.customForm.reset({
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
    const dataToSave = Object.assign({}, this.deal, this.customForm.value);
    this.dealService.saveDealDetails(dataToSave);
  }
}
