import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RecipeService } from './recipe.service';

@Injectable()
export class DataStorageService {
    BASE_URL = 'https://ng-recipe-book-230ba.firebaseio.com/recipes.json';

    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put(this.BASE_URL, this.recipeService.getRecipes());
    }
}