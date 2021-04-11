import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './post.model';
import {PostsService} from './posts.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() bookName: string;
  @Input() bookId: string;
  @Input() bookAuthor: string;
  @Input() bookCover;
  // @Input() name: string;
  @Output() close = new EventEmitter<void>();
  allowSubmit = false;
  commentCreationStatus = 'No comment was created!';
  commentAdded = false;
  loadedPosts: Post[] = [];
  id = null;
  name: string;


  constructor(public postsService: PostsService) {
    this.allowSubmit = true;

  }
  ngOnInit(): void {
    // this.fetchPosts();
  }

  onCreateComment(bookId: string) {
    this.commentAdded = true;
    if (bookId != null) {
      this.commentCreationStatus = 'Comment was created for ' + bookId;
    } else {
      this.commentCreationStatus = 'error';
    }

  }

  onClose() {
    this.close.emit();

  }

  getAnonymous(e: any, name: string) {
    if (e.target.checked) {
      this.name = 'Anonymous';
      console.log('Anonymous checked');
    } else {
      this.name = name;
      console.log('Anonymous not checked');
    }
  }

  onAddPost(form: NgForm, bookId: string, name: string) {
    if (form.invalid) {
      return;
    }

    this.postsService.addPost(form.value.title, form.value.content, form.value.rating, bookId, name);
    form.resetForm();
    this.commentCreationStatus = 'Comment was added for ' + name;
  }
}
