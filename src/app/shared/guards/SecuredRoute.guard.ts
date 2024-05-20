import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const securedRouteGuard: CanActivateFn = (route, state) => {

    const redirectNotAuthorized = () => {
        const router = inject(Router);
        router.navigate(['/not-found']);
        return false;
    };
    const userRole = localStorage.getItem('user_roles')
    
    if (!localStorage.getItem('token')) return redirectNotAuthorized();
    if (userRole !== 'admin') return redirectNotAuthorized();
    
    console.log(userRole)

    return true;
};