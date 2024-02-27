import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactiondetailComponent } from './transactiondetail.component';

describe('TransactiondetailComponent', () => {
  let component: TransactiondetailComponent;
  let fixture: ComponentFixture<TransactiondetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactiondetailComponent]
    });
    fixture = TestBed.createComponent(TransactiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
