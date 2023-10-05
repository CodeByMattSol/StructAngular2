import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import { GetAdvertSingleService } from '../../services/get-advert-single.service'

@Component({
  selector: 'app-advert-content',
  templateUrl: './advert-content.component.html',
  styleUrls: ['./advert-content.component.scss']
})

export class AdvertContentComponent{
    id: string;
    dataSingle: any;

    private subscription: Subscription;
    constructor(private activateRoute: ActivatedRoute, private _adv: GetAdvertSingleService) {
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }

    ngOnInit () {
        this._adv.getData(this.id).subscribe(resp => {
            this.dataSingle = resp
        })
    }
}
