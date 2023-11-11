import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'Elemento de LowerCase';
  public nameUpper: string = 'Elemento de UpperCase';
  public nameTitle: string = 'Elemento de TileCase';
  public customDate: Date = new Date();
  public nsameTitle: string = 'Elemento de TileCase';

}
