import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-adverts',
  templateUrl: './search-adverts.component.html',
  styleUrls: ['./search-adverts.component.scss']
})

export class SearchAdvertsComponent { 
    category: any; details: any;

    private querySubscription: Subscription;

    constructor(private route: ActivatedRoute){
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.category = queryParam['id'];
                this.details = queryParam['parentId'];
            }
        );
    }
}
