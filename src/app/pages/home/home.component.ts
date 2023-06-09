import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeModel } from 'src/app/models/HomeModel';
import LoginService from 'src/app/service/login.service';
import { iusuario } from 'src/app/usuario';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeForm!: FormGroup;
  login!: iusuario;

  constructor(private formBuilder : FormBuilder,
    private router: Router, private loginService : LoginService) { }

  ngOnInit(): void{
    this.homeForm = this.formBuilder.group(
      {
        user: ['',[Validators.required]],
        pass: ['',[Validators.required]]
      }
    );
  }

  submitLogin()
  {

    const user = this.homeForm.get('user')?.value;
    const pass = this.homeForm.get('pass')?.value;

   this.loginService.getLogin(user, pass).subscribe(data => {
      if (data.length != 0) {
        this.router.navigate(['/menu']);
      } else {
        alert("Usuário e/ou senha incorreto(s)");
      }
   })


  }

}
