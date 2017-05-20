import {Recipe} from '../recipes/recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient-model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Wiener Schnitzel',
      'Super tasty Schnitzel',
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Eggs', 2),
        new Ingredient('Crusts', 1)
      ]),
    new Recipe(
      'Big Fat Burger',
      'Burger angus bacon',
      'http://aht.seriouseats.com/images/20100223-realitycheck-bkxt.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2),
        new Ingredient('Salad', 1),
        new Ingredient('Tomatoes', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
