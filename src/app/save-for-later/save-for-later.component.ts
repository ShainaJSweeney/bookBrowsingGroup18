import { Component, OnInit } from '@angular/core';
import { SaveService } from "src/app/services/save.service";

@Component({
  selector: 'app-save-for-later',
  templateUrl: './save-for-later.component.html',
  styleUrls: ['./save-for-later.component.css']
})
export class SaveForLaterComponent implements OnInit {

  savedItems = this.saveService.getItems();

  constructor( private saveService: SaveService) { }

  ngOnInit(): void {
  }

}
