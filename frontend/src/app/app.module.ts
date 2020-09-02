import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
// Services
import { UserService } from './services/user.service'

// Components
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { NewaccountComponent } from './components/newaccount/newaccount.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [ 

{
  path:'',
  pathMatch: 'full',
  redirectTo: 'wellcome'
},
{
  path:'admin',
  component: AdminComponent
},


{
  path:'customer',
  component:CustomerComponent
},
{
  path:'employee',
  component:EmployeeComponent
},
{
  path:'login',
  component:LoginComponent
},

{
  path:'newaccount',
  component:NewaccountComponent
},
{
  path:'wellcome',
  component:WellcomeComponent
}


]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomerComponent,
    EmployeeComponent,
    LoginComponent,
    NewaccountComponent,
    WellcomeComponent,
    AddUserComponent,
    RemoveUserComponent,
    EditUserComponent,
    ListUserComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes,{
      enableTracing:true
    })
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
