import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayersService {

  constructor() { }

  ids: string [] = []

  getIds (): string [] {
    return this.ids
  }

  addIds (id) {
    if (!this.ids.find(item => item === id) && id) {
      this.ids.push(id)
    }
  }
}
