import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Admin } from './components/admin/admin.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { NewaccountComponent } from './components/newaccount/newaccount.component';
/**
 * Here you can add all the components  to be visible for the application
 * we can also add directives, and pipes 
 */
@NgModule({
  declarations: [
    AppComponent,
    Admin,
    EmployeeComponent,
    CustomerComponent,
    LoginComponent,
    NewaccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
