import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 6,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      name: [
        '',
        [ Validators.required, Validators.minLength(3) ]
      ],
      price: [
        0,
        [ Validators.required, Validators.min(0) ]
      ],
      inStorage: [
        0,
        [ Validators.required, Validators.min(0) ]
      ],
    });
  }

  ngOnInit(): void {
    // this.myForm.reset(rtx5090);
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if(!this.myForm.controls[field]) { return null; }

    const errors = this.myForm.controls[field].errors;
    if(!errors) { return null; }

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `El valor debe tener al menos ${errors['minlength'].requiredLength} caracteres`;

        default:
          return null;
      }
    }

    return null;
  }

  onSave(): void {
    if(!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log({form: this.myForm.value});
    this.myForm.reset({
      price: 10,
      inStorage: 10,
    });
  }

}
