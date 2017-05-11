import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/' +
      'Recipe_logo.jpeg/480px-Recipe_logo.jpeg'),
    new Recipe('Test recipe 2', 'Test description 2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/' +
      'Recipe_logo.jpeg/480px-Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
