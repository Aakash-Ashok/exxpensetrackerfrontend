import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactiondetailComponent } from './transactiondetail/transactiondetail.component';
import { TransactioncreateComponent } from './transactioncreate/transactioncreate.component';
import { HomeComponent } from './home/home.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactiondetailComponent,
    TransactioncreateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
