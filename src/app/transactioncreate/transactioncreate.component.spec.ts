import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactioncreateComponent } from './transactioncreate.component';

describe('TransactioncreateComponent', () => {
  let component: TransactioncreateComponent;
  let fixture: ComponentFixture<TransactioncreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactioncreateComponent]
    });
    fixture = TestBed.createComponent(TransactioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
