import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthGuardService } from '../service/auth-guard.service';
import { AuthService } from '../service/auth-service';
import { DataStorageService } from '../service/data-storage.service';
import { RecipeService } from '../service/recipe.service';
import { ShoppingListService } from '../service/shopping-list.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService,
        AuthGuardService
    ]
})
export class CoreModule {}