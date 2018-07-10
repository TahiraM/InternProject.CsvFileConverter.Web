import { Component, OnInit } from '@angular/core';
import { Deal, DealService } from '../core';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {
  deals: Deal[];

  constructor(private dealService: DealService) { }

  ngOnInit() {
    this.dealService.getDeals()
    .subscribe((deals: Deal[]) => this.deals = deals);
  }

}
