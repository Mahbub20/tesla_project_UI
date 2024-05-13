import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginCredential } from 'src/app/models/loginCredential';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {} as User;
  validateForm: any;
  model = {} as LoginCredential;

  constructor(private _authService: AuthService,
              private toastr: ToastrService,
              private router: Router,
              private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.validateForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  login(){
    debugger;
    // let credential = {} as LoginCredential;
    // credential.username = "kminchelle";
    // credential.password = "0lelplR";
    this.model.expiresInMins = 30;
    this._authService.login(this.model).subscribe(data=>{
      this.user = data;
      this._authService.setToken(data.token);
      console.log('returned data ',this.user);
      this.toastr.success('','logged in successfully');
      this.router.navigateByUrl('/dashboard');
      
    },(error)=>{
      console.log(error.error.message);
      this.toastr.error('',error.error.message);
    })
  }

}
