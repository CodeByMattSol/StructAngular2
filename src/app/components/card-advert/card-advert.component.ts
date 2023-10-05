import { Component, OnInit } from '@angular/core';
import { GetAdvertsService } from '../../services/get-adverts.service';

@Component({
  selector: 'app-card-advert',
  templateUrl: './card-advert.component.html',
  styleUrls: ['./card-advert.component.scss']
})

export class CardAdvertComponent implements OnInit {
	public data: any;

 	constructor(private _adv: GetAdvertsService) {}

 	ngOnInit () {
 		this._adv.getData().subscribe(resp => {
      		this.data = resp
      		console.log(this.data)
    	})
 	}
}