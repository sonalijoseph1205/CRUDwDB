import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/app/shared/student.service';
import { Student } from 'src/app/shared/student.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public service: StudentService,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm()
  }
 resetForm(form?:NgForm)
 {
   if(form!=null)
   {
    form.resetForm();
    this.service.formData={
      StudentID:0,
      FullName:"",
      Department:"",
      StuCode:"",
      Mobile:""
 
   }
   }
 }

 onSubmit(form: NgForm)
 {
   if(form.value.StudentID==0)
{
  this.insertRecord(form);
}
else{
this.updateRecord(form);
}
 }
 insertRecord(form: NgForm)
 {
this.service.postStudent(form.value).subscribe(res=>
  {
    this.toastr.success('Inserted Successfully','Stu. Register');
    this.resetForm(form);
    this.service.refreshList();
  })
 }
 updateRecord(form: NgForm)
 {
   this.service.putStudent(form.value).subscribe(res=>
    {
      this.toastr.info ('Updated Successfully','Stu. Register');
      this.resetForm(form);
      this.service.refreshList();
    })
 }
}
