import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  
  baseUrl:string="http://127.0.0.1:8000/api/v1/transactions/"
  refreshRequired=new Subject()
  emitTransactionId=new Subject()
  constructor(private http:HttpClient) { }

  getTransactions(){
    return this.http.get(this.baseUrl)
  }
  retrieveTransactionDetails(id:number){
    return this.http.get(`${this.baseUrl}${id}/`)
  }
  createTransaction(data:any){
    return this.http.post(this.baseUrl,data).pipe(tap(data=>this.refreshRequired.next(true)))
  }
  updateTransaction(id:any,data:any){
    return this.http.put(`${this.baseUrl}${id}/`,data)
  }
  removeTransaction(id:number){
    return this.http.delete(`${this.baseUrl}${id}/`)
  }

  dispactchTranstionId(id:number){
    this.emitTransactionId.next(id)
  }
}

 
