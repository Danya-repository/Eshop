import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInUpComponent implements OnInit, OnDestroy {

  public form: FormGroup = new FormGroup<any>({
    login: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(5), Validators.required]),
    syncPassword: new FormControl(''),
    registration: new FormControl(false),
    remember: new FormControl(false)
  });

  private subLogReg?: Subscription;

  constructor(private authService: AuthService) { }

  passwordsEquals = () => this.form.get('password')?.value === this.form.get('syncPassword')?.value;

  ngOnInit(): void {}

  submitForm() {
    if (this.form.get('registration')?.value && this.passwordsEquals()) {
      this.subLogReg = this.authService
        .registration({email: this.form.controls?.['login'].value, password: this.form.controls?.['password'].value})
        .subscribe(response => {
          this.authService.setCookieSecretKey(response.name)

          this.form.reset();
        })
    } else {
      this.subLogReg = this.authService
        .login({email: this.form.get('login')?.value, password: this.form.get('password')?.value})
        .subscribe(users => {

          let secretKey = Object.keys(users)
            .find(secretKey => users[secretKey].email === this.form.get('login')?.value && users[secretKey].password === this.form.get('password')?.value)

          if (secretKey) {
            this.authService.setCookieSecretKey(secretKey);
            this.form.reset()
          }
        })
    }
  }

  ngOnDestroy(): void {
    this.subLogReg?.unsubscribe();
  }
}
