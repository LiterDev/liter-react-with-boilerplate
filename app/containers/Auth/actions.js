/*
 *
 * Auth actions
 *
 */

import {
  DEFAULT_ACTION,
  AUTH_ACESS_VALID,
  // AUTH_ACESS_VALID_RES,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

// export function authAcessValid() {
//   return {
//     type: AUTH_ACESS_VALID,
//   };
// }

export function authAcessValid(acessToken, refreshToken, resStatus) {
  return {
    type: AUTH_ACESS_VALID,
    acessToken,
    refreshToken,
    resStatus,
  };
}
