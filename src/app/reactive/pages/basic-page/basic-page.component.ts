import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

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

  onSave(): void {
    if(!this.myForm.valid) { return; }
    console.log({form: this.myForm.value});
  }

}
