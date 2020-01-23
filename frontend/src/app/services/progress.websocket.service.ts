import { Injectable } from '@angular/core';
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';
import { WebSocketService } from './websocket.service';
import { WebSocketOptions } from '../models/websocket.options';

export const progressStompConfig: InjectableRxStompConfig = {
  webSocketFactory: () => {
    return new WebSocket('ws://localhost:8080/stomp');
  }
};

@Injectable()
export class ProgressWebsocketService extends WebSocketService {
  constructor(stompService: RxStompService) {
    super(
      stompService,
      progressStompConfig,
      new WebSocketOptions('/topic/progress')
    );
  }
}
