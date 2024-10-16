import { FormControl } from "@angular/forms";


export const canBeStrider = (control: FormControl) => {
  const value: string = control.value.trim().toLowerCase();
  return (value === 'strider') ? { noStrider: true} : null;
}
