import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  contactInformation = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    ph_num: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl('')
    });
}
