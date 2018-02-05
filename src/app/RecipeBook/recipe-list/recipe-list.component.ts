import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe','this is a test','https://static.pexels.com/photos/691114/pexels-photo-691114.jpeg'),
    new Recipe('test recipe','this is a test','https://static.pexels.com/photos/691114/pexels-photo-691114.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
