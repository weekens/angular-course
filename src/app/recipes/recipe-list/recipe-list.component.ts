import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Some description', 'https://www.google.ru/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjS7par7erYAhUFEawKHaZSDnEQjRwIBw&url=https%3A%2F%2Fwww.campbellsoup.co.uk%2Frecipes%2Fvegetarian-pizza&psig=AOvVaw3s9oZWAUnjcZ0qEKA77tqG&ust=1516685856256618')
  ];

  constructor() { }

  ngOnInit() {
  }

}
