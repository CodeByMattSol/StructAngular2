import { Component } from '@angular/core';

@Component({
  selector: 'app-card-advert',
  templateUrl: './card-advert.component.html',
  styleUrls: ['./card-advert.component.scss']
})
export class CardAdvertComponent {
	items = [
		{
			name: 'Гитара Fender',
			price: 20000,
			location: 'Москва, Ленинский проспект',
			time: 'Сегодня 14:12'
		},

		{
			name: 'MacbookPro 14',
			price: 30000,
			location: 'Севастополь, Ленинский проспект',
			time: 'Сегодня 11:12'
		},

		{
			name: 'Посудомойка',
			price: 40000,
			location: 'Краснодар, Ленинский проспект',
			time: 'Сегодня 10:12'
		},
	]
}
