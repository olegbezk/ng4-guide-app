import {Recipe} from '../recipes/recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/' +
      'Recipe_logo.jpeg/480px-Recipe_logo.jpeg'),
    new Recipe('Test recipe 2', 'Test description 2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/' +
      'Recipe_logo.jpeg/480px-Recipe_logo.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
