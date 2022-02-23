import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSub.asObservable();

  constructor() {
  }

  setLoading(loading: boolean): void {
    this.loadingSub.next(loading)
  }
}
