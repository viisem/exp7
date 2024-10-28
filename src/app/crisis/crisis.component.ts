import { Component } from '@angular/core';

interface Crisis {
  id: number;
  name: string;
}


@Component({
  selector: 'app-crisis',
  templateUrl: './crisis.component.html',
  styleUrl: './crisis.component.css'
})
export class CrisisComponent {

  crises: Crisis[] = [
    { id: 1, name: 'Earthquake' },
    { id: 2, name: 'Flood' },
    { id: 3, name: 'Fire' },
    { id: 4, name: 'Tornado' },
    { id: 5, name: 'Hurricane' },
  ];
  
}
