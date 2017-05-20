import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient-model';
import {ShoppingListService} from '../../service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.getValue(this.nameInputRef), this.getValue(this.amountInputRef));
    this.slService.addIngredient(newIngredient);
  }

  private getValue(element: ElementRef) {
    return element.nativeElement.value;
  }

}
