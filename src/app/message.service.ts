// import { Injectable } from '@angular/core';

// @Injectable()
// export class MessageService {
//     messages: string[] = [];
//     constructor() { }
//     add(messages: string) {
//         this.messages.push(messages);
//     }
//     clear() {
//         this.messages = [];
//     }
// }
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    messages: string[] = [];

    add(message: string) {
        this.messages.push(message);
    }

    clear() {
        this.messages = [];
    }
}


