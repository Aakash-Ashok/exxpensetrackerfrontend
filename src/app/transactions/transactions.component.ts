import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
   
  transactions:any

  constructor(private service:ExpenseService){
    
  }

  ngOnInit(): void {
    this.service.getTransactions().subscribe(data => this.transactions = data)
    this.service.refreshRequired.subscribe(data=>this.ngOnInit())
  }


  destroyTransation(id: any) {
    this.service.removeTransaction(id).subscribe(data=>this.ngOnInit())
  }

  editTransaction(id:any){
    this.service.dispactchTranstionId(id)
  }
}

