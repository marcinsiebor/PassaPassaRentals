import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  repeatPass: string = 'none';

  constructor(private authService: AuthorizationService, private router: Router, private toastr: ToastrService) { }  

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    gender: new FormControl("", [Validators.required]),
    pwd: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    rpwd: new FormControl(""),
  });

  registerSubmitted() {
    if (this.PWD.value == this.RPWD.value) {
      console.log(this.registerForm.valid);
      this.repeatPass = 'none';

      this.authService.registerUser(this.registerForm.value).subscribe(res => { 
        console.log(res);

        this.router.navigate(['/home']);
        this.toastr.success("Sign Up successful !!", "Enjoy!!",{
          easing:"ease-in",
          easeTime: 1000
        });
      });

    } else {
      this.repeatPass = 'inline';
    }
  }

  get FirstName(): FormControl {
    return this.registerForm.get('firstname') as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get('lastname') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get Mobile(): FormControl {
    return this.registerForm.get('mobile') as FormControl;
  }

  get Gender(): FormControl {
    return this.registerForm.get('gender') as FormControl;
  }

  get PWD(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }

  get RPWD(): FormControl {
    return this.registerForm.get('rpwd') as FormControl;
  }

}
