import { Subject } from 'rxjs';

import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        
      ]; 

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}







// import { EventEmitter } from '@angular/core';

// import {Recipe} from './recipe.model';

// export class RecipeService {
//     recipeSelected = new EventEmitter<Recipe>();

//     private recipes: Recipe[] =[
//         new Recipe('Test Recipe', 'This is a test reipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
//         new Recipe('Test Recipe', 'This is another a test reipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
//         new Recipe('Test Recipe', 'This is one more test reipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
//       ];


//     getRecipes(){
//         return this.recipes.slice();
//     }

// }