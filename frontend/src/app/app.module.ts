import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Services
import { UserService } from './services/user.service'

// Components
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { NewaccountComponent } from './components/newaccount/newaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomerComponent,
    EmployeeComponent,
    LoginComponent,
    NewaccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
