import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IAdvert } from "../interfaces/advert.interface";
import { HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class GetAdvertSingleService {
    url = 'http://194.87.237.48:5000/Advert';

	headers = new HttpHeaders()
	  .set('accept', 'application/json');

	constructor(private http: HttpClient){ }

	getData(id:string) {
		return this.http.get(this.url + `/${id}`, { headers: this.headers })
	}
}
