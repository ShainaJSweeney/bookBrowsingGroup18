import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  address: String;
  credit: String;
  password: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onUpdateSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      address: this.address,
      credit: this.credit,
      username: this.username,
      password: this.password
    }
  //Required Fields
  if(!this.validateService.validateRegister(user)){
    this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
  return false;
}

  //Validate Email
  if(!this.validateService.validateEmail(user.email)){
    this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
  return false;
}

  //update user
  this.authService.authenticateUser(user).subscribe(data => {
    if((data as any).success){
      this.authService.storeUserData((data as any).token, (data as any).success);
      this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/dashboard']);
    }
    else{
      this.flashMessage.show((data as any).msg , {cssClass: 'alert-danger', timeout: 5000});
      this.router.navigate(['/login']);
    }
  });


  }
}
