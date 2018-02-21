import { EventEmitter } from '@angular/core';

export class UserService {
  private activeUsers: string[] = ['Max', 'Anna'];
  private inactiveUsers: string[] = ['Chris', 'Manu'];
  public onChange = new EventEmitter<void>();

  getActiveUsers() {
    return this.activeUsers.slice();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.onChange.emit();
  }

  getInactiveUsers() {
    return this.inactiveUsers.slice();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.onChange.emit();
  }
}
