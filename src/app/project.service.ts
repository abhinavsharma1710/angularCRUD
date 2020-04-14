import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';

export class Project {
  id:number;
  userId:number;
  title:string;
  body:string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient, private firestore:AngularFirestore) { }

  getAllProjects(){
    return this.firestore.collection('projects').snapshotChanges();
  }

  insertProjectData(data:Project){
    return this.firestore.collection('projects').add({
      id:data.id,
      userId:data.userId,
      title:data.title,
      body:data.body
    });
  }

  updateProjectData(data){
    return this.firestore.collection('projects')
      .doc(data.id)
      .set(data);
  }

  deleteProjectData(id){
    return this.firestore.collection('projects').doc(id).delete();
  }
}
