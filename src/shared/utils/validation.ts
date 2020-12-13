import * as yup from 'yup';

import {digit, lowercase, specialSymbol, uppercase} from 'shared/utils/regex';

/*~
 * HELPERS
 */

export enum AuthConstraints {
  required = "Required field",
  emailRequired = "Required field",
  passwordRequired = "Required field",
  passwordUppercaseAndLowercase = "Must include: uppercase and lowercase",
  passwordNumberOrSpecialSymbol = "Must include: number or special symbol",
  passwordSixPlusCharacters = "Must be 6+ characters",
}

export const emailShape = yup.string().required(AuthConstraints.required);

export const passwordShape = yup
  .string()
  .min(6, AuthConstraints.passwordSixPlusCharacters)
  .matches(uppercase, AuthConstraints.passwordUppercaseAndLowercase)
  .matches(lowercase, AuthConstraints.passwordUppercaseAndLowercase)
  .test(
    "passwordNumberOrSpecialSymbol",
    AuthConstraints.passwordNumberOrSpecialSymbol,
    (value) => {
      return digit.test(value!) || specialSymbol.test(value!);
    }
  )
  .required(AuthConstraints.required);
