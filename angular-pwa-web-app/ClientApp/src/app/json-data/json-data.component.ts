import { Component } from '@angular/core';

@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
})
export class JsonDataComponent {
  public jsonData: any[] = [];

  constructor() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(async response => {
        this.jsonData = await response.json();
      })
      .then(json => console.log(json))
  }
}
