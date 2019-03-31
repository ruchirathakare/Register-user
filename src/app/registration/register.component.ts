import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ApiService} from '../api.service';
@Component({
  selector:'app-register',
  templateUrl:'./register.component.html'
})

export class RegisterComponent{
  constructor(private fb: FormBuilder,private api:ApiService){
  }
   profileForm = this.fb.group({
      name: [''],
      add: [''],
      phone:[''],
      email:[''],
      password:['']
   })

   onSubmit(){
     console.log(this.profileForm.value);
      this.api.registerUser(this.profileForm.value).subscribe((data)=>{
        if(data){
          alert('register success')
        }
      },(err)=>{
        console.log(err);
      });
   }
}