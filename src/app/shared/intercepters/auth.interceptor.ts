import type { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token') ?? '';
  const newReq = req.clone({
    headers: req.headers.set('Authorization', token),
  }); 

  return next(newReq); 
};
