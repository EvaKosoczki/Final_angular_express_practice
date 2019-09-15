import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list$: Observable<any> = this.userService.read()
  title = 'angular-final';
  searchText = '';

  constructor(private userService: UserService) {
    userService.access()
  }

  onDelete(id: number): void {
    this.userService.delete(id).forEach(
      data => console.log(data)
    )
  }
}
