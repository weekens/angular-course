import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe', 'Some description', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg'),
    new Recipe(
      'Another test recipe', 'Some description', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
