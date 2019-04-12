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
  public error:string;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'name' : new FormControl(null , Validators.required),
      'password' : new FormControl(null , Validators.required),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let user: any = JSON.parse(localStorage.getItem('user'));
      if ( user.userData.name == this.loginForm.value.name && user.userData.password == this.loginForm.value.password) {
        user.logged = 1;
        localStorage.setItem('user', JSON.stringify(user)); 
        this.router.navigate(['/home']); 
      } else {
        this.error = "invalid username or password";

      }

    }
  } 

}
