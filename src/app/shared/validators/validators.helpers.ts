import { FormControl, ValidationErrors } from "@angular/forms";

/**
 * https://gist.github.com/Klerith/bdf52e3500b0a6c66cf0b4dcd61549ee
 */
export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const canBeStrider = (control: FormControl): ValidationErrors | null => {
  const value: string = control.value.trim().toLowerCase();
  return (value === 'strider') ? { noStrider: true} : null;
}
