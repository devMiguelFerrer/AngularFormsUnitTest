import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  /**
   * STATIC METHOD - validateSpaceInString
   * @description Validamos si el string contiene espacios
   * @example new FormControl('', CustomValidators.validateSpaceInString);
   * @return ( ValidationErrors | null )
   */
  static validateSpaceInString(control: AbstractControl): (ValidationErrors | null) {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { containSpace: true };
    } else {
      return null;
    }
  }
}
