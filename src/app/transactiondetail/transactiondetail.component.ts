import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-transactiondetail',
  templateUrl: './transactiondetail.component.html',
  styleUrls: ['./transactiondetail.component.css']
})
export class TransactiondetailComponent implements OnInit {

  id:any
  transaction:any

  constructor(private route:ActivatedRoute,private service:ExpenseService){
    
    this.id = this.route.snapshot.params['id']
    
  }
  
  ngOnInit() {
    this.service.retrieveTransactionDetails(this.id).subscribe(data => this.transaction = data)
  }
}
