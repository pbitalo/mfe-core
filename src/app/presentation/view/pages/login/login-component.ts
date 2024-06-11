import { Component, Injector } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CrudComponent } from '../../shared/base/crud-component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss'],
})
export class LoginComponent extends CrudComponent {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email])
  matcher = new MyErrorStateMatcher();
  constructor(injector: Injector) {
    super(injector);
  }

  criarFormulario(): void {
    throw new Error('Method not implemented.');
  }
  pegarDados(): void {
    throw new Error('Method not implemented.');
  }

  submit() {
    console.log('submit');
  }
}
