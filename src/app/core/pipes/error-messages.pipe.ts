import { Pipe, type PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'errorMessages',
  standalone: true,
})
export class ErrorMessagesPipe implements PipeTransform {

  transform(errors: ValidationErrors | null | undefined): string {
    if (!errors) {
      return '';
    } else {
      if (errors['required']) {
        return 'Required field!';
      } else if (errors['minlength']) {
        return `This field must have minimum ${errors['minlength'].requiredLength} characters`;
      } else if (errors['maxlength']) {
        return `This field must have maximum ${errors['maxlength'].requiredLength} characters`;
      } else if (errors['pattern']) {
        return 'This field is invalid';
      } else {
        return '';
      }
    }
    
  }

}
