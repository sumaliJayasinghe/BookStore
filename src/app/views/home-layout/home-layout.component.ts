import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/route-animation';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  animations: [slideInAnimation]
})
export class HomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
