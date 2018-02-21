import { Component } from '@angular/core';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  constructor(private userService: UserService) {}

  get users() {
    return this.userService.getActiveUsers();
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
