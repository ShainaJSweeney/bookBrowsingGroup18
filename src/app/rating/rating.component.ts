

import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{
   @Input() bookName: string;
   @Input() bookId: string;
   @Output() close = new EventEmitter<void>();
   allowSubmit = false;
   commentCreationStatus = 'No comment was created!';
   commentAdded = false;



   constructor() {
     setTimeout(() => {
       this.allowSubmit = true;
     }, 2000);
   }



  ngOnInit(): void {
  }


  onCreateComment() {
     this.commentAdded = true;
     this.commentCreationStatus = 'Comment was created for ' + this.bookName;
  }

   onClose() {
     this.close.emit();

   }

}
