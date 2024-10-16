import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidator implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>((subscribe) => {

      if(email === 'plars@yopmail.com'){
        subscribe.next({ emailTaken: true });
        return subscribe.complete();
      }

      subscribe.next(null);
      return subscribe.complete();
    })
    .pipe(
      delay(3000)
    );

    return httpCallObservable;
  }

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const value = control.value;
  //   return of({
  //     emailTaken: true
  //   })
  //   .pipe(
  //     delay(2000)
  //   )
  // }

}
