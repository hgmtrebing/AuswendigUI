export * from './cardController.service';
import { CardControllerService } from './cardController.service';
export * from './deckController.service';
import { DeckControllerService } from './deckController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [CardControllerService, DeckControllerService, UserControllerService];
