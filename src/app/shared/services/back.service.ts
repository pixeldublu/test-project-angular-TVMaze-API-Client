import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BackData } from '@app/core/models/back-data.model';

@Injectable()
export class BackService {

    private backSource = new BehaviorSubject<BackData>({show: false, searched: localStorage.getItem('backData')});
    backData$ = this.backSource.asObservable();

    updateBackData(data: BackData) {
        localStorage.setItem('backData', data.searched);
        this.backSource.next(data);
    }

}
