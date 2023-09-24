import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IAdvert } from "../interfaces/advert.interface";
import { Observable } from "rxjs";

@Injectable()
export class GetAdvertsService {
	url: string = '../../assets/backend-test/getAdverts-api.json'

	constructor(private http: HttpClient){ }
      
    getData(): Observable<IAdvert[]> {
        return this.http.get<IAdvert[]>(this.url)
    }
}
