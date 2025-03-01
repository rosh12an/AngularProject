  import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:8082/";
  u:string='';
  p:string='';
  
  constructor(private http:HttpClient, 
   ) { }

    
  
  postStudentData(data : any)
  {
    // return this.http.post<any>("http://localhost:3000/studentList/",data);
  //  let username="roshan";
  //  let password="roshan";
   
    const headers=new HttpHeaders({Authorization: 'Basic '+   btoa(this.u+":"+this.p)})
    return this.http.post<any>(this.url+"register",data,{headers,responseType:'json'});
  }

  getStudentData()
  {
    // return this.http.get<any>("http://localhost:3000/studentList/");
    // console.log(u);
    // let username="roshan";
    // let password="roshan";
    // console.log(this.var1);
    // console.log(this.logu.adminForm.value.username)
     const headers=new HttpHeaders({Authorization: 'Basic '+btoa(this.u+":"+this.p)})
    return this.http.get<any>(this.url+"home",{headers,responseType:'json'});
  }

  putStudentData(data:any, rollNumber:number)
  {
    // return this.http.put<any>("http://localhost:3000/studentList/"+id,data)
  //   let username="roshan";
  //  let password="roshan";
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(this.u+":"+this.p)})
    return this.http.put<any>(this.url+"update/"+rollNumber,data,{headers,responseType:'json'})
  }

  deleteStudentData(rollNumber:number)
  {
      // return this.http.delete<any>("http://localhost:3000/studentList/"+id)
      // let username="roshan";
      // let password="roshan";
      
       const headers=new HttpHeaders({Authorization: 'Basic '+btoa(this.u+":"+this.p)})
      return this.http.delete<any>(this.url+"delete/"+rollNumber,{headers,responseType:'json'})
  }

  
  
  login(username:string,password:string)
  {
    this.u=username;
    this.p=password;
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)})
    return this.http.get(this.url+'login',{headers,responseType:'text' as 'json'});
  }

  

}


