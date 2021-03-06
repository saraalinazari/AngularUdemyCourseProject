import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector:'shoppingList',
    templateUrl:'./shoppingList.component.html',
    styleUrls:['./shoppingList.component.css']
})

export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private shoppingListService:ShoppingListService){

    }
    ngOnInit(){
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientsChanged
            .subscribe(
                (ingredients:Ingredient[]) => {
                    this.ingredients = ingredients;
                }
            )
    }

}