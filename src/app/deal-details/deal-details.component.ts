import { Deal, DealService } from './../core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.css']
})
export class DealDetailsComponent implements OnInit {
  deal: Deal;

  constructor(private dealService: DealService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(param => {
        const dealId = param['dealId'];
        if (dealId) {
          this.dealService.getDealsDetails(dealId)
            .subscribe((deal: Deal) => this.deal = deal);
        }
      });
}}
