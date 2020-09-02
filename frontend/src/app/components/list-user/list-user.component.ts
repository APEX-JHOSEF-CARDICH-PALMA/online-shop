import { Component, OnInit } from '@angular/core';
// Services
import { UserService } from '../../services/user.service';
//Models
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {


  user$:User[]=[];

  constructor(
    private userService: UserService
  ) { }
  
  ngOnInit() {
    return this.userService.getApiUsers().subscribe((data:any) => {
    this.user$ = data.data;
    console.log(this.user$);
  
  });
  }

}
