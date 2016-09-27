import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

//custom components (Directives)
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customer/customers.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CustomersComponent, CustomerComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
