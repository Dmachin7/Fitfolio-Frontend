import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emmiters';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup

  constructor (
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        username: '',
        password: ''
      })
  }

  submit(): void {
    this.http.post('http://localhost:3000/user/login', 
    this.form.getRawValue(), {
      withCredentials: true})
      
    .subscribe ((res) =>  {
    Emitters.authEmitter.emit(true)
    this.router.navigate(['/'])})
  }

}
