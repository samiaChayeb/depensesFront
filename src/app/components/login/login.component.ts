import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message="";
credentials: any;

  constructor(private userService: UserService, private router: Router) { }

  async login() {
    try {
      const response =this.userService.login(this.email, this.password);
      console.log('User logged in successfully', response);
      this.router.navigateByUrl("/dashboard");
    } catch (error) {
      console.error('Error logging in', error);
      this.message = "Wrong password or email";
    }
  }

}