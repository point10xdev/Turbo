import { WebSocketServer } from 'ws';

import {client} from "@repo/db";

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  client.user.create({

    // Dumping random in the database
    data: {
      email : Math.random().toString(),
      password : Math.random().toString()
    }
  })
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('Hi from WS Server');
});