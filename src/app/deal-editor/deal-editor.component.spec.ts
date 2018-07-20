import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealEditorComponent } from './deal-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
describe('DealEditorComponent', () => {
  let component: DealEditorComponent;
  let fixture: ComponentFixture<DealEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealEditorComponent ],
      imports: [ CommonModule,
                 FormsModule,
                 ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
