import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RxStompService  } from '@stomp/ng2-stompjs';
import { ProgressWebsocketService } from './services/progress.websocket.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RxStompService,
    ProgressWebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
