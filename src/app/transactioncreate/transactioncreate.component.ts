import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ExpenseService } from '../services/expense.service';
@Component({
  selector: 'app-transactioncreate',
  templateUrl: './transactioncreate.component.html',
  styleUrls: ['./transactioncreate.component.css']
})
export class TransactioncreateComponent implements OnInit {
  isEdit:boolean=false
  categories=['food','fuel','entertainment','bills','rent',"emi",'miscellaneous']
  data:any
  transaction:any
  constructor(private service:ExpenseService){}
   
  transactionForm = new FormGroup({
    "title":new FormControl("",Validators.required),
    "type":new FormControl("",Validators.required),
    "category":new FormControl("",Validators.required),
    "amount":new FormControl("",Validators.required),
    "user":new FormControl("",Validators.required)
  })

  addTransaction(){
    let data = this.transactionForm.value
    this.service.createTransaction(data).subscribe(data=>console.log(data))
    this.transactionForm.reset()
    
  }

  ngOnInit(): void {
      this.service.emitTransactionId.subscribe((id:any)=>{
      this.isEdit = true
      this.service.retrieveTransactionDetails(id).subscribe(data => this.transactionForm.patchValue(data))
      })
      
  }
}
