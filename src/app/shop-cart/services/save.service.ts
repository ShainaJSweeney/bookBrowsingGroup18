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

  removeFromSave(id: any) {
    const index = this.savedItems.indexOf(id, 0);
    if (index > -1) {
      this.savedItems.splice(index, 1);
    }
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
