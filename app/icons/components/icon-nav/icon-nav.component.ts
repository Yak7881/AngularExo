import { Component } from '@angular/core';
// Importer la varialbe
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.scss']
})
export class IconNavComponent {
  // Stocker faBars dans propriétés
  icon = faBars
}
