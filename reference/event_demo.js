const EventEmitter=require('events');

// create class;

class MyEmitter extends EventEmitter {}

//Init object

const myEmitter=new MyEmitter();

// Event listner
myEmitter.on('event',()=>console.log('Event Fired!'));


//Init event

myEmitter.emit('event');

