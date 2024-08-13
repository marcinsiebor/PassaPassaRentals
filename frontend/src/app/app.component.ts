import { Component } from '@angular/core';
import {AuthorizationService} from './authorization.service';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rentalsite';

  get isLoggedIn(){
    return this.authorizationService.isLoggedIn;
  }

  constructor(private authorizationService : AuthorizationService, private toastr: ToastrService) { }

  onLogout() {
    this.authorizationService.logout().subscribe(() => {
      this.toastr.success("You Have been Logged Out!!", "Bye!!",{
        easing:"ease-in",
        easeTime: 1000
      });
    });
  }
}
