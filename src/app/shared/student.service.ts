import { Injectable } from '@angular/core';
import { Student } from './student.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

    formData: Student = new Student;
    list: Student[] = [];
    readonly rootURL="https://localhost:44322/api";

  constructor(public http: HttpClient) { }

  postStudent(formData: Student)
  {
 return this.http.post(this.rootURL+'/Student',formData);
  }

 refreshList()
 {
   this.http.get(this.rootURL+'/Student')
   .toPromise().then(res=>this.list=res as Student[]);
 }

 putStudent(formData: Student)
  {
 return this.http.put(this.rootURL+'/Student/'+formData.StudentID,formData);
  }

  deleteStudent(id: number)
  {
    return this.http.delete(this.rootURL+'/Student/'+id);
  }
}
