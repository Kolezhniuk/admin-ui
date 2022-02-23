import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // activeLink$: Observable<string> = null;
  activeLink: string = 'requests';

  constructor() {
  }


  linkChanged(link: string) {

  }

  ngOnInit(): void {
  }

}
