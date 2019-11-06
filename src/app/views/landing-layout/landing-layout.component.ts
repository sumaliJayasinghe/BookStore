import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss']
})
export class LandingLayoutComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  /**
   * Navigate to home page
   */
  getStart = () => {
    this.route.navigate(['/books']);
  }

}
