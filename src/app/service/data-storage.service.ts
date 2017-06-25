import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from './recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
    BASE_URL = 'https://ng-recipe-book-230ba.firebaseio.com/recipes.json';

    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put(this.BASE_URL, this.recipeService.getRecipes());
    }
    
    getRecipes() {
        this.http.get(this.BASE_URL).subscribe(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}