import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealDeleteComponent } from './deal-delete.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('DealDeleteComponent', () => {
  let component: DealDeleteComponent;
  let fixture: ComponentFixture<DealDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealDeleteComponent ],
      imports: [HttpClientModule, RouterModule, ReactiveFormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
