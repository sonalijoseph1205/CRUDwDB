import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { Student } from 'src/app/shared/student.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(public service: StudentService,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
populateForm(stu: Student)
{
this.service.formData=Object.assign({},stu);
}
onDelete(id:number)
{
  if(confirm('Are you sure you want to delete this entry?'))
  {
    this.service.deleteStudent(id).subscribe(res=> 
      {
       this.service.refreshList();
       this.toastr.warning("Deleted Successfully","STU.Register");
  
      })
  }
}
}
