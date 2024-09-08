import { Routes } from '@angular/router';
import {AngularComponent} from "./components/angular/angular.component";
import {AdministrationPageComponent} from "./components/administration-page/administration-page.component";

export const routes: Routes = [
  {path: 'angular', component: AngularComponent},
  {path: 'admin', component: AdministrationPageComponent}
];
