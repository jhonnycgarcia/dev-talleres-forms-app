import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Resident Evil', Validators.required],
    ]),
  });

  public newFavorite: FormControl = this.fb.control(
    '',
    [ Validators.required, Validators.minLength(3) ]
  );

  constructor(
    private fb: FormBuilder
  ) { }

  get favoriteGames(): FormArray {
    return this.myForm.get('favoriteGames') as FormArray;
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

  isValidFieldArray(formArray: FormArray, idx: number): boolean | null {
    return formArray.controls[idx].errors
      && formArray.controls[idx].touched;
  }

  onAddToFavorite(): void {
    // this.favoriteGames.push(this.fb.control(''));
    if(!this.newFavorite.valid) {
      this.newFavorite.markAsTouched();
      return;
    }
    const newGame = this.newFavorite.value;
    this.favoriteGames.push(
      this.fb.control(newGame, [Validators.required])
    );

    this.newFavorite.reset();
  }

  onDeleteFavorite(idx: number): void {
    this.favoriteGames.removeAt(idx);
  }

  onSubmit(): void {
    if(!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }

}
