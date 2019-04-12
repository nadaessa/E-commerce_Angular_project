import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  
  constructor( 
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name' : new FormControl(null , Validators.required),
      'email' : new FormControl(null , [Validators.required,Validators.email]),
      'password' : new FormControl(null , [Validators.required,Validators.minLength(8)]),
    });
  }

  buildForm() {
    
  }

  
   onSubmit() {
    if (this.signupForm.valid) {
          var user: any = {
            userData: this.signupForm.value,
            logged: 1
          };
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/']);
    }
    } 
  

}
