import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  savedItems = [];

  saveForLater(book: any) {
    // @ts-ignore
    this.savedItems.push(book);
  }

  getItems() {
    return this.savedItems;
  }

  clearList() {
    this.savedItems = [];
    return this.savedItems;
  }

  constructor() { }
}
