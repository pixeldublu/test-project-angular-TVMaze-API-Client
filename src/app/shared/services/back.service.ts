import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BackService {

    private backSource = new BehaviorSubject<string>('');
    backData$ = this.backSource.asObservable();

    updateBackData(data: string) {
        this.backSource.next(data);
    }

}
