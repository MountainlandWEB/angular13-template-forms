import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'todd-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  @ViewChild('empForm') empForm?: NgForm;
  
  model = new Employee(
    'John4',
    'Smith',
    false,
    ''
  );
  
  alphaSpace = /^[A-z ]*$/;

  constructor() { }

  ngOnInit(): void {
  }

  // isAlphaSpace(str: string) {
  //   return this.alphaSpace.test(str);
  //   // return  str.match(this.alphaSpace)?d.length;
  // }
  submitForm() {
    console.log('form submitted');
    console.log(this.empForm);
    console.log(this.model);
  }

}
