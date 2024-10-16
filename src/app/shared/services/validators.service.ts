import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public canBeStrider(control: FormControl): ValidationErrors | null {
    const value: string = control.value.trim().toLowerCase();
    return (value === 'strider') ? { noStrider: true} : null;
  }

  public isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors
      && form.controls[field].touched;
  }

  isEqualTo(from: string, to: string): ValidationErrors | null {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fromValue = formGroup.get(from)?.value || '';
      const toValue = formGroup.get(to)?.value || '';

      if(fromValue !== toValue) {
        formGroup.get(to)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      formGroup.get(to)?.setErrors(null);
      return null;
    }
  }

}
