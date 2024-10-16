import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { canBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators.helpers';

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
        Validators.pattern(firstNameAndLastnamePattern)
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(emailPattern)
      ]
    ],
    username: [
      '',
      [ Validators.required, canBeStrider ]
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  isValidField(field: string): void {
    // TODO: obtener validación desde un servicio
  }

  onSubmit(): void {
    if(!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
  }

}
