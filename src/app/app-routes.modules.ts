import { Routes, RouterModule } from '@angular/router';
import { DealListComponent } from './deal-list/deal-list.component';
import { DealDetailsComponent } from './deal-details/deal-details.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'deals', pathMatch: 'full' },
  { path: 'deals', component: DealListComponent },
  { path: 'deals/:dealId', component: DealDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

