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
      name: ['', Validators.required],
      price: [0, Validators.required],
      inStorage: [0, Validators.required]
    });
  }

  onSave(): void {
    console.log({form: this.myForm.value});
  }

}
