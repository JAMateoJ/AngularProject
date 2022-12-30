import { Component, OnInit, Injectable } from '@angular/core';
import { WelcomeService } from './welcome.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Data{
  nombre: string;
  edad: string;
  is: string;
  ciudad: string;
  estado: string;
  }
  
  @Injectable({
    providedIn: 'root',
  })
  //export class DataService {
    //private jsonURL = 'assets/my_data.json';
    //constructor(private http: HttpClient) {}
    //getDatas(): Observable<any> {
      //return this.http.get(this.jsonURL);
    //}
  //}
  
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  //longText = `Hola, mi nombre es JOSE ANTONIO MATEO JIMENEZ, mi IS es JAMJ3. Tengo 28 años y vivo en Ixtlahuaca, Mexico `;
  longText?: string;
  constructor(private welcomeService: WelcomeService) { }
  //private dataService: DataService
  displayedColumns: string[] = ['Nombre', 'Edad', 'IS', 'Ciudad', 'Estado'];
  dataSource: Data[] = [];
  
  ngOnInit(): void {
    this.welcomeService.getData().subscribe(data => {
      if (data.my_data) {
        this.dataSource = data.my_data;
        this.longText = `Hola, mi nombre es ${this.dataSource[0].nombre}, mi IS es ${this.dataSource[0].is}. Tengo ${this.dataSource[0].edad} años y soy de ${this.dataSource[0].ciudad}, ${this.dataSource[0].estado}`;
       // console.log(data.my_data);
        //console.log(this.longText);
        //console.log(data.my_data[0].name);
        /////////////////////////////////////
        //this.name =data.my_data[0].name;
        //this.edad =data.my_data[0].edad;
        //this.is =data.my_data[0].is;
        //this.cuidad =data.my_data[0].cuidad;
        //this.estado =data.my_data[0].estado;
        /////////////////////////////////////
        //this.datos = data.my_data as Datos[];
        //console.log(this.datos.length);

      }
    })

  // this.dataService.getDatas().subscribe((data) => {
      //this.dataSource = data.my_data;
     // this.longText = `Hola, mi nombre es ${this.dataSource[0].nombre}, mi IS es ${this.dataSource[0].is}. Tengo ${this.dataSource[0].edad} años y soy de ${this.dataSource[0].ciudad}, ${this.dataSource[0].estado}`;
   // });
  }
}


