import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
//External Style/
  styleUrls: ['./student.component.css'],

  /* Internal style in the component file*/
  styles:[`table{
    background-color:green ;
    color: yellow;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
    font-size: large;
    border-collapse: collapse;
}
td{
    border: 1px solid black;
}`]
})
export class StudentComponent implements OnInit {

  Name:string="Bhagyashri";
  Email:string="mbhagyashri05@gmail.com";
  Address:string="Mumbai";

  constructor() {}

  ngOnInit(): void{


  }

}
