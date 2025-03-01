import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {Router} from '@angular/router';
// import { ToastrService } from 'ngx-toastr/public_api';
import { AlertComponent } from '../alert/alert.component';
// import { ToastrService } from 'ngx-toastr/public_api';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  adminForm!:FormGroup;
  // login:boolean=false;
  
  // constructor(private fb:FormBuilder,
  //   private router:Router,
  //   private api:ApiService,
  //   // private toastr:ToastrService,
  //   private snackbar:MatSnackBar,
  //   private dialog:MatDialog){}
  // email:string='admin@test.com';
  // password:string='admin';




  // ngOnInit():void
  // {
  //     this.adminForm=this.fb.group({
  //       email:['',Validators.required],
  //       password:['',Validators.required]
  //     })
  // }

  // home()
  // {
  //   console.log(this.adminForm.value.email)
  //   if(this.adminForm.value.email==this.email && this.adminForm.value.password==this.password)
  //   {
  //     this.login=true;
  //     // alert("Successfully log in")
  //     // this.toastr.success("Admin Login Successfully")
  //     // this.dialog.open(AlertComponent,{width:'30%'});
  //     this.snackbar.open('Login Successfully','',{duration:1000});
  //     this.router.navigate(["/home"]);
  //   }
  //   else{
  //     alert("enter valid credential")
  //   }

  //   // this.api.getUser(this.adminForm.value).subscribe();
  // }


  //spring security implimentation
  username!:string;
  password!:string;
  message:any;

   constructor(private fb:FormBuilder,
    private router:Router,
    private api:ApiService,
    // private toastr:ToastrService,
    private snackbar:MatSnackBar,
    private dialog:MatDialog){}
  ngOnInit():void{
    this.adminForm=this.fb.group({
            username:['',Validators.required],
            password:['',Validators.required]
          })
  }

  // handleLogin()
  // {
  //   this.api.login(this.username,this.password).subscribe((result)=>{
  //     this.invalidLogin=false;
  //     this.loginSuccess=true;
  //     this.successMessage='Login Successful'
  //   }, () =>{
  //     this.invalidLogin=true;
  //     this.loginSuccess=false;
  //     this.errorMessage=''
  //   }
  //   )
  // }
  
  // name=this.adminForm.value.username

  doLogin()
  {
    // this.router.navigate(['home'])
    let resp = this.api.login(this.adminForm.value.username,this.adminForm.value.password);
    resp.subscribe(data=>{
      // this.message=data;
      console.log(data);
      this.router.navigate(["home"]);
    })
  }

}



