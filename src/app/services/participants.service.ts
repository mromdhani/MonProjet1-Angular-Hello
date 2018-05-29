import { Injectable } from '@angular/core';
import { Participant } from '../domain/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor() { }

  getAll(): Participant[] {
    return  [
      {'numero': 'P1000', 'nom': 'Sami BEN ACHOUR', 'age' : 25},
      {'numero': 'P2000', 'nom': 'Mahmoud', 'age' : 25},
      {'numero': 'P3000', 'nom': 'Zouheir', 'age' : 25},
      {'numero': 'P4000', 'nom': 'Houssem', 'age' : 25},
      {'numero': 'P5000', 'nom': 'Marwene', 'age' : 25},
      {'numero': 'P6000', 'nom': 'Ghada', 'age' : 25}
    ];
  }
}
