import { DealListComponent } from './deal-list/deal-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DealDetailsComponent } from './deal-details/deal-details.component';
import { AppRoutingModule } from './app-routes.modules';


@NgModule({
  declarations: [AppComponent, DealListComponent, DealDetailsComponent],
  imports: [BrowserModule, HttpModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
