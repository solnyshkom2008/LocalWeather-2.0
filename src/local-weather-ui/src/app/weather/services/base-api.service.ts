import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseApiService {

    constructor() { }

    protected extractData(res: Response) {
        let body = res.json();

        return body == null ? {} : body;
    }

    protected handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;

        if (error.status === 401) { // User is no more authenticated!

            location.reload();

            errMsg = 'The request has not been applied because it lacks valid authentication credentials for the target resource.';

            return Observable.throw(errMsg);
        }

        if (error instanceof Response) {
            let body = error.json() || '';

            let err = body.Errors ? body.Errors[0] : body.Message || JSON.stringify(body);
            //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            errMsg = err;
        } else {
            errMsg = error.Message ? error.Message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}