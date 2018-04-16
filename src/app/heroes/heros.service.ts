// import { Injectable } from '@angular/core';
// import { Heros } from './heros';
// import { HeroList } from './mock_heros';
// import { Observable } from 'rxjs';
// import { of } from 'rxjs/observable/of';
// import { MessageService } from '../message.service';

// @Injectable()
// export class HerosService {

//     constructor(
//         private message: MessageService
//     ) { }

//     getHeros(): Observable<Heros[]> {
//         console.log(this.message, 333);

//         this.message.add('HeroService : fetch heroes');
//         return of(HeroList);
//     }

// }
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Heros } from './heros';
import { HeroList } from './mock_heros';
import { MessageService } from '../message.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HerosService {

    constructor(
        private messageService: MessageService,
    ) { }

    getHeros(): Observable<Heros[]> {
        // Todo: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched heroes');
        return of(HeroList);
    }
}
