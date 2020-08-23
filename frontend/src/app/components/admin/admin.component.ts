import { Component } from '@angular/core';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
  })


  export class Admin {
    public tittle: string;
    public info:string;

    constructor(){
        this.tittle="Admin Page";
        this.info="Admin page atribute ";
        console.log('Componente ADMIN cargado...');
    }
  }