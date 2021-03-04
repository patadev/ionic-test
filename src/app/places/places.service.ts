import { Injectable } from '@angular/core';

import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
    private _places: Place[] = [
      new Place(
        'p1',
        'Manhattan Mansion',
        'In the heart of New York City.',
        'https://i.pinimg.com/originals/39/23/94/3923946e4831a4501ffe4bde29b1299b.jpg',
        540.99,
        new Date('2021-01-01'),
        new Date('2021-12-31')
      ),
      new Place(
        'p2',
        'L\'Amour Toujours',
        'Romantic nest in Paris.',
        'https://www.sortiraparis.com/images/80/77153/527994-saint-valentin-2020-au-salon-nube-marignan-champs-elysees.jpg',
        320.50,
        new Date('2021-01-01'),
        new Date('2021-12-31')
      ),
      new Place(
        'p3',
        'The Foggy Palace',
        'Not your average city trip.',
        'https://i.pinimg.com/originals/9c/88/44/9c8844b217bdb6c17db14f51ad2e51a5.jpg',
        210.50,
        new Date('2021-01-01'),
        new Date('2021-12-31')
      )
    ];

    get places() {
      return [...this._places];
    }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)}
  }
}
