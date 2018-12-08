import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppConst } from '../../app.constants';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    store_id: string;
    constructor() {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const customReq = req.clone({
            headers: req.headers.set('app-language', 'en')
        });
        // send cloned request with header to the next handler.

        return next
            .handle(customReq)
            .pipe(
                tap((ev: HttpEvent<any>) => {
                    // do nothing
                }, (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                      console.log('err', err);
                    }
                })
            );
    }
}
