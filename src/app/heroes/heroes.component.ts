import { Component } from '@angular/core';

interface Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  
  heroes: Hero[] = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'Wonder Woman' },
    { id: 4, name: 'Spider-Man' },
    { id: 5, name: 'Iron Man' },
  ];

}
