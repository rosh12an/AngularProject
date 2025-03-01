import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  genderlist = ["Male", "Female", "Other"];
  branchlist = ['Mechanical','Civil','Electrical', 'Computer Science', 'Information Technology']

  disabledValue=false;

  readonly NoWhitespaceRegExp: RegExp = new RegExp("\\S");
  // rollno=true;
  

  admissionForm! : FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private api : ApiService, 
    private snackbar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogComponent>,
    // private toastr:ToastrService,
    ){}

  ngOnInit(): void{
    
    this.admissionForm = this.formBuilder.group({
      rollNumber:[''],
      name:['',[Validators.required,Validators.minLength(1),Validators.pattern('[a-zA-Z]*')]],
      surname: ['', [Validators.required,Validators.minLength(1),Validators.pattern('[a-zA-Z]*')]],
      gender: ['', Validators.required],
      address: ['', [Validators.required,Validators.minLength(1),Validators.pattern(this.NoWhitespaceRegExp)]],
      contactno: [ '', [Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("[0-9]*")]],
      branch: ['', Validators.required],
      
    })
    // console.log(this.editData);
    if(this.editData)
    {
      console.log(this.editData.rollNumber)
      this.disabledValue=true;
      this.admissionForm.controls['rollNumber'].setValue(this.editData.rollNumber);
      this.admissionForm.controls['name'].setValue(this.editData.name);
      this.admissionForm.controls['surname'].setValue(this.editData.surname);
      this.admissionForm.controls['gender'].setValue(this.editData.gender);
      this.admissionForm.controls['address'].setValue(this.editData.address);
      this.admissionForm.controls['contactno'].setValue(this.editData.contactno);
      this.admissionForm.controls['branch'].setValue(this.editData.branch);
    }
  }

  addStudent()
  {
    if(!this.editData)
    {
    {
      this.api.postStudentData(this.admissionForm.value)
      .subscribe({
        next : (res)=> {
            // alert("Student Data Added Sucessfully");
            this.snackbar.open("Student Data Added Sucessfully",'',{duration:1000})
            this.admissionForm.reset();
            this.dialogRef.close();
            
        },
        error : ()=> {
            // alert("Error while adding the Student Data");
            this.snackbar.open("Error while adding records",'',{duration:1000})
        },
      })
    }
    }else{
      this.updateStudent()
    }
  }

  closePopup()
  {
    this.dialogRef.close();
  }

  updateStudent()
  {
      this.api.putStudentData(this.admissionForm.value,this.editData.rollNumber)
      .subscribe({
        next : (res)=>{
        // alert("Data updated Sucessfully");
        this.snackbar.open("Data updated Sucessfully",'',{duration:1000})
        this.admissionForm.reset();
        this.dialogRef.close();
      }, error : (err)=>{
        // alert("Error while updating record !!");
        this.snackbar.open("Error while updating records",'',{duration:1000})
      }
    })
  } 


  get userN()
  {
    return this.admissionForm.get('name');
  }

  get userS()
  {
    return this.admissionForm.get('surname')
  }

  get userA()
  {
    return this.admissionForm.get('address');
  }

  get userC()
  {
    return this.admissionForm.get('contactno')
  }

}
