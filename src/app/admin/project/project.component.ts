import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { FormGroup,FormControl, Validators } from '@angular/forms'
import { ProjComponent } from '../proj/proj.component';
export class Project {
  id:number;
  userId:number;
  title:string;
  body:string;
}

//export const newProject: Project = new Project();
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects
  newProject: Project = new Project();
  isEdit: boolean = false;
  projectForm : FormGroup
  id:string = null
  @ViewChildren('prj') prj : QueryList<ProjComponent>;

  constructor(private projServ: ProjectService) { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      id : new FormControl(null, Validators.required),
      userId: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.minLength(3)),
      body: new FormControl(null, Validators.maxLength(50))
    })
    this.projServ.getAllProjects().subscribe(res=>{
      this.projects = res.map(item=>{
        let temp = item.payload.doc.data();
        temp['id'] = item.payload.doc.id;
        return temp;
      });
    })
  }

  onSaveClick(){
    let data = this.newProject;
    if(this.projectForm.status==='VALID'){
      this.projServ.insertProjectData(data).then(res=>{
        console.log(res);
      });
    }else{
      return false
    }
    
    
  }

  onEdit(item){
    console.log(item)
    this.isEdit = true;
    this.newProject = item;
    document.getElementById("modalBtn").click();
  }

  onUpdateClick(){
    this.projServ.updateProjectData(this.newProject);
    document.getElementById("modalBtn").click();
  }

  onDelete($event, id){
    //console.log($event)
    this.projServ.deleteProjectData($event.id);
  }

  toggleProject(){
    let projs = this.prj.toArray();
    console.log(projs)
    for(let i =0; i<projs.length; i++){
      projs[i].toggleCard();
    }
  }

}
