import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emmiters';
import { DataService } from '../data.service';
import { environment } from 'src/enviorments/enviorment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup

  info: string;



  constructor (
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private data: DataService) { }

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        username: '',
        password: ''
      })

      this.data.currentMessage.subscribe(info => this.info = info)
  }


  submit(): void {
    this.http.post('https://fit-folio-15bacc8dfac7.herokuapp.com/user/login' , 
    this.form.getRawValue(), {
      withCredentials: true})
      
    .subscribe ((res) =>  {
    Emitters.authEmitter.emit(true)
    this.router.navigate(['/'])})
  }

  sendInfo() {
    this.data.changeInfo(this.form.getRawValue().username)
  }
 
}
