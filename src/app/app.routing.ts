/**
 * Created by user on 10/29/2016.
 */
import { Routes, RouterModule } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { MenuComponent } from "./menu/menu.component";
import { LabsComponent } from "./labs/labs.component";
import { ProfileComponent } from "./profile/profile.component";

const APP_ROUTES: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'works', component: WorksComponent },
  { path: 'labs', component: LabsComponent},
  { path: 'profile', component: ProfileComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

