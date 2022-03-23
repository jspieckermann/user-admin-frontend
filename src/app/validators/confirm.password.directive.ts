import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const repeatPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirm = control.get('confirm');

    let same = password && confirm && password.value === confirm.value;

    if (same && !confirm?.hasError('required')) {
        confirm?.setErrors(null);
    }

    if (!same && !confirm?.hasError('required')) {
        confirm?.setErrors({
            passwordNotEqual: true
        });
    }
  
    return  same ? null : { passwordNotEqual: true };
  };