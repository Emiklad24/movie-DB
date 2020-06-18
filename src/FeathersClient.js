import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import authentication from '@feathersjs/authentication-client'

const socketURL = "http://localhost:3030";

const client = feathers();

const socket = io(socketURL, {
    transports: ['websocket'],
    forceNew: true,
    timeout: 50000
});
client.configure(socketio(socket))
client.configure(authentication({
    storage: window.localStorage
}))

export default client;