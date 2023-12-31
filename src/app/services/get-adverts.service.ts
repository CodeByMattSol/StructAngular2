import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IAdvert } from "../interfaces/advert.interface";
import { HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class GetAdvertsService {
	url = 'http://194.87.237.48:5000/Advert/search';

	headers = new HttpHeaders()
	  .set('Content-Type', 'application/json')
	  .set('accept', 'application/json');

	body = { search: '' };

	constructor(private http: HttpClient){ }

	getData() {
		return this.http.post(this.url, this.body, { headers: this.headers })
	}
}
