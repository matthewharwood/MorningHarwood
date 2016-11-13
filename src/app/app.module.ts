import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WorkComponent } from './work/work.component';
import { routing } from './app.routing';
import { LabsComponent } from './labs/labs.component';
import { ProfileComponent } from './profile/profile.component';
import { ActionBtnComponent } from './action-btn/action-btn.component';
import { CameraChannelService } from './camera-channel.service';
import { FolioComponent } from './folio/folio.component';
import { RunningHeadComponent } from './running-head/running-head.component';
import { BonerComponent } from './boner/boner.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { WorkPostsService } from "./work/work-posts.service";
import { OverlayComponent } from './overlay/overlay.component';
import { UiStateService } from "./ui-state.service";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WorkComponent,
    LabsComponent,
    ProfileComponent,
    ActionBtnComponent,
    FolioComponent,
    RunningHeadComponent,
    BonerComponent,
    ArticleHeaderComponent,
    OverlayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CameraChannelService,
    WorkPostsService,
    UiStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
