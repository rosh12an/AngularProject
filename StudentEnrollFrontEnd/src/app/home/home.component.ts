import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = "Student Admission"
  displayedColumns: string[] = ['rollNumber','name','contactno','branch','action'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog:MatDialog, private api: ApiService, private router:Router,
    private snackbar:MatSnackBar
    ){}

  ngOnInit(): void{
    this.getAllStudentList();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%',
    }).afterClosed().subscribe(val=>{
      if(val === 'save')
      {
        this.getAllStudentList();
      }
    });
  }

  getAllStudentList(){
    this.api.getStudentData().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort= this.sort;
      },
      error : (err)=>{
        this.snackbar.open("Error while fetching records",'',{duration:1000})
      }
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Commenting for demo trial
  editStudent(row : any)
  {
    this.dialog.open(DialogComponent,{
      width: '30%',
      data: row
    })
  }

  deleteStudent(rollNumber:number)
  {
      return this.api.deleteStudentData(rollNumber).subscribe({
        next:(res)=>{
          // alert('Student deleted successfully');
          this.snackbar.open("Student deleted successfully",'',{duration:1000})
          this.getAllStudentList();
        },
        error: ()=>{
          // alert("error while deleting the record !!")
          this.snackbar.open("Error while deleting records",'',{duration:1000})
        }
      });
  }

  logOut()
  {
      this.router.navigate(['/'])
  }
}
