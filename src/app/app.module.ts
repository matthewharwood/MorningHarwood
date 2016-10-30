import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BabylonWallpaperDirective } from './babylon-wallpaper.directive';
import { MenuComponent } from './menu/menu.component';
import { WorksComponent } from './works/works.component';
import { routing } from './app.routing';
import { LabsComponent } from './labs/labs.component';
import { ProfileComponent } from './profile/profile.component';
import { ActionBtnComponent } from './action-btn/action-btn.component';
import { CameraChannelService } from './camera-channel.service';


@NgModule({
  declarations: [
    AppComponent,
    BabylonWallpaperDirective,
    MenuComponent,
    WorksComponent,
    LabsComponent,
    ProfileComponent,
    ActionBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CameraChannelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
