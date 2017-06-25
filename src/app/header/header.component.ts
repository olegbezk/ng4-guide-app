import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../service/data-storage.service';
import { AuthService } from '../service/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
        (response: Response) => {
          console.log(response);
        }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogOut() {
    this.authService.logOut();
  }
}
