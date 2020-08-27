import { Component, OnInit } from '@angular/core';
// Services
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admim_user$:any[]=[]; // Here we store all the data from user service.
  user$:User[]=[];

  constructor(private userService: UserService) { 
    this.admim_user$ = userService.getUsers();
  
  }

  ngOnInit() {
    return this.userService.getApiUsers().subscribe((data:any) => {
    this.user$ = data.data;
    console.log(this.user$);
  
  });
  }

}
