import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from './recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from './auth-service';

@Injectable()
export class DataStorageService {
    BASE_URL = 'https://ng-recipe-book-230ba.firebaseio.com/recipes.json';
    AUTH = '?auth=';

    constructor(
        private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService) {
    }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put(this.BASE_URL + this.AUTH + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        //noinspection TypeScriptValidateTypes
        this.http.get(this.BASE_URL + this.AUTH + token)
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}