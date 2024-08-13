import { Component, EventEmitter,Output } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuCollapsed=true;

  get isLoggedIn(){
    return this.authorizationService.isLoggedIn;
  }

  get hasSignedUp() {
    return this.authorizationService.hasSignedUp();
  }
  
  @Output() logout = new EventEmitter();

  constructor(private authorizationService : AuthorizationService) {}

  onLogoutClicked()
  {
    this.logout.emit();
  }


}
