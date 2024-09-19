import { EventEmitter } from "events";
import { v4 as uuidv4 } from "uuid"; // Correct way to import v4

console.log(uuidv4()); // Call v4 to generate a UUID

class Logger extends EventEmitter {
  log(msg) {
    // call event
    this.emit("message", { id: uuidv4(), msg: msg });
  }
}

export default Logger;
