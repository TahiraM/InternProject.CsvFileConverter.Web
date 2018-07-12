import { Routes, RouterModule } from '@angular/router';
import { DealListComponent } from './deal-list/deal-list.component';
import { DealDetailsComponent } from './deal-details/deal-details.component';
import { NgModule } from '@angular/core';
import { DealEditorComponent } from './deal-editor/deal-editor.component';

export const routes: Routes = [
  { path: '', redirectTo: 'deals', pathMatch: 'full' },
  { path: 'deals', component: DealListComponent },
  { path: 'deals/:dealId', component: DealDetailsComponent },
  { path: 'dealEdit/:dealId', component: DealEditorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

