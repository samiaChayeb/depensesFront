import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/user';

const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value === confirmPassword.value ? null : { mismatch: true };
};


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router:Router) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      userEmail: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, Validators.required]
    }, {
      validators: passwordMatchValidator
    });
  }

  register() {
    if (this.userForm.valid) {

      const user: User = {
        firstname: this.userForm.value.firstname,
        lastname: this.userForm.value.lastname,
        userEmail: this.userForm.value.userEmail,
        password: this.userForm.value.password
      };

      this.userService.register(user).subscribe({
        next: (response) => {
          console.log('User registered successfully', response);
          this.router.navigateByUrl("/");
        },
        error: (error) => {
          console.error('Error registering user', error);
        }
      });
    } else {
      alert("wrong password or email")
    }
  }
}
