import { Component } from '@angular/core';
import {DeckControllerService} from "../../schema";

@Component({
  selector: 'app-administration-page',
  standalone: true,
  imports: [],
  templateUrl: './administration-page.component.html',
  styleUrl: './administration-page.component.css'
})
export class AdministrationPageComponent {

  constructor(deckService: DeckControllerService) {
    console.debug("Initializing Administration Page Component ... ");
    deckService.getAllDecksCardless().subscribe(decks => {
      console.log("Decks: " + JSON.stringify(decks));
    })
  }
}
