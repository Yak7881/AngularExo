import { Component } from '@angular/core';

// décorateur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // propriété = variable donc pas besoin de mettre "const" ou "let" devant title
  title = "Titre";
  // elementCible.innerHTML = title
  constructor(){
    this.title="Title";
  }
  //créer une propriété en booelen
  open = false

  // Ici une méthode = function  
  onClick(){
    console.log("cliqué");
    // opérateur ! = js
    this.open = !this.open;
    console.log(this.open);

  }
}
// index.html + script.js
