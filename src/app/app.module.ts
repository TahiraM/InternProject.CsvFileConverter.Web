import { DealListComponent } from './deal-list/deal-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DealDetailsComponent } from './deal-details/deal-details.component';
import { AppRoutingModule } from './app-routes.modules';
import { DealEditorComponent } from './deal-editor/deal-editor.component';
import { DealDeleteComponent } from './deal-delete/deal-delete.component';


@NgModule({
  declarations: [AppComponent, DealListComponent, DealDetailsComponent, DealEditorComponent, DealDeleteComponent, ],
  imports: [BrowserModule, HttpModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {}
