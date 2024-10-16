import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorSrv.firstNameAndLastnamePattern)
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorSrv.emailPattern)
      ]
    ],
    username: [
      '',
      [
        Validators.required,
        this.validatorSrv.canBeStrider
      ]
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private validatorSrv: ValidatorsService
  ) { }

  isValidField(field: string): boolean | null {
    return this.validatorSrv.isValidField(this.myForm, field);
  }

  onSubmit(): void {
    if(!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
  }

}
