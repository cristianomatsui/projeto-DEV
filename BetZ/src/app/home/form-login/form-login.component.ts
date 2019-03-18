import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit{

  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userName = this.form.get('userName').value;
    const password = this.form.get('password').value;

    console.log(userName);
    console.log(password);

   /* this.authService
      .authenticate(userName, password)
      .subscribe(
        () => {
          if(this.fromUrl) {
            this.router.navigateByUrl(this.fromUrl);
          } else {
            this.router.navigate(['user', userName])
          }
        },
        err => {
          console.log(err);
          this.loginForm.reset();
          this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput.nativeElement.focus();
          alert('Invalid user name or password');
        }
      ); */
  }

}
