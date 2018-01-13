import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {environment} from 'environments/environment';
import { StorageSpacesAnabi } from './storage-spaces-anabi.model';
import {ResponseWrapper} from '../model/response-wrapper.model';
import {createRequestOption} from '../model/request-util';

@Injectable()
export class StorageSpacesAnabiService {

    private resourceUrl = environment.api_url + '/StorageSpaces';

    constructor(private http: Http) { }

    create(storageSpaces: StorageSpacesAnabi): Observable<StorageSpacesAnabi> {
        const copy = this.convert(storageSpaces);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(storageSpaces: StorageSpacesAnabi): Observable<StorageSpacesAnabi> {
        const copy = this.convert(storageSpaces);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<StorageSpacesAnabi> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to StorageSpacesAnabi.
     */
    private convertItemFromServer(json: any): StorageSpacesAnabi {
        const entity: StorageSpacesAnabi = Object.assign(new StorageSpacesAnabi(), json);
        return entity;
    }

    /**
     * Convert a StorageSpacesAnabi to a JSON which can be sent to the server.
     */
    private convert(storageSpaces: StorageSpacesAnabi): StorageSpacesAnabi {
        const copy: StorageSpacesAnabi = Object.assign({}, storageSpaces);
        return copy;
    }
}
