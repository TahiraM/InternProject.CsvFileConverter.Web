import { Deal } from '../core/model/deal';
import { Component, OnInit } from '@angular/core';
import { DealService } from '../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deal-delete',
  templateUrl: './deal-delete.component.html',
  styleUrls: ['./deal-delete.component.css']
})
export class DealDeleteComponent implements OnInit {
  deal: Deal;
  private router: Router;

  constructor(private dealService: DealService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(param => {
        const dealId = param['dealId'];
        if (dealId) {
          this.dealService.deleteDeal(dealId)
            .subscribe(m => {
              this.router.navigate(['/deals']);
            });
        }

      });
  }
}

