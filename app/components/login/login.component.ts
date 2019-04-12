import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'name' : new FormControl(null , Validators.required),
      'password' : new FormControl(null , [Validators.required,Validators.minLength(8)]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
          var user: any = {
            userData: this.loginForm.value,
            logged: 1
          };
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/']);
    }
    } 

}
