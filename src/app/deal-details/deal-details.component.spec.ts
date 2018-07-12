import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealDetailsComponent } from './deal-details.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('DealDetailsComponent', () => {
  let component: DealDetailsComponent;
  let fixture: ComponentFixture<DealDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealDetailsComponent ],
      imports: [FormBuilder, BrowserModule,
        FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
