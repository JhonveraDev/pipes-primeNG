import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'Invitarlo',
    female: 'Invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18Plural
  public clients: string[] = ['Maria', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    'other': 'Tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //Key Value Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    addres: 'Ottawa Canada'
  }

  //Async Pipe  

  public myObservableTimer = interval(2000).pipe(tap(value => console.log('tap:', value))
  );
}
