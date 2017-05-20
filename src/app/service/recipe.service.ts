import {Recipe} from '../recipes/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient-model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
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

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
