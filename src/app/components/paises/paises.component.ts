import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  public paises:any[] = [];

  constructor( private http:HttpClient) {

    this.http.get ( 'https://restcountries.eu/rest/v2/lang/es' ).subscribe ( (response:any) => {

      this.paises = response;

    })


  }

  ngOnInit() {
  }

  drop (evento: CdkDragDrop<any>) {
    
    moveItemInArray ( this.paises, evento.previousIndex, evento.currentIndex );





  }

}
