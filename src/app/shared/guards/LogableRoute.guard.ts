import type { CanActivateFn } from '@angular/router';

export const logableRouteGuard: CanActivateFn = (route, state) => {
  console.log("LOG: ", route, state);       //route: erişilmek istenen route    //state mevcutkonum

  return true;
};