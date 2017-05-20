import {Ingredient} from '../shared/ingredient-model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChangesEventEmitter(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChangesEventEmitter(this.ingredients);
  }

  private ingredientsChangesEventEmitter(ingredients: Ingredient[]) {
    return this.ingredientsChanged.emit(ingredients.slice());
  }
}
