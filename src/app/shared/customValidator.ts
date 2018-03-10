import { AbstractControl } from '@angular/forms';

export function customPasswordValidator(control: AbstractControl) {
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  return PASSWORD_REGEX.test(control.value) ? null : {
    customPasswordValidator: {
      valid: false
    }
  };
}
