import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from './../../../services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isIn = false; // responsive collapse
  public profileCollapse:boolean = false;

  constructor(public authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  toggleState() {
    this.isIn = !this.isIn;
  }

}