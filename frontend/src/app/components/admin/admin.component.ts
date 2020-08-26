import { Component, OnInit } from '@angular/core';
// Services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admim_user:any[]=[]; // Here we store all the data from user service.

  constructor(private _service: UserService) { 
    this.admim_user = _service.getUsers();
  }

  ngOnInit(): void {
  }

}
