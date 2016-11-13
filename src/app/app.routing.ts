/**
 * Created by user on 10/29/2016.
 */
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { MenuComponent } from "./menu/menu.component";
import { LabsComponent } from "./labs/labs.component";
import { ProfileComponent } from "./profile/profile.component";
import { OverlayComponent } from "./overlay/overlay.component";

const APP_ROUTES: Routes = [
    { path: '', component: MenuComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'work', component: WorkComponent },
    { path: 'work', component: WorkComponent,
      children: [{path: ':id', component: OverlayComponent}] },
    { path: 'labs', component: LabsComponent},
    { path: 'profile', component: ProfileComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

