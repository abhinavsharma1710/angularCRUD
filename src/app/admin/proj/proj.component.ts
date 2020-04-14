import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.scss']
})
export class ProjComponent implements OnInit {
  @Input("currentProject") project;
  @Input("recordIndex") i: number;
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  showCard:boolean = false;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.index)
  }

  editProject(item){
    //console.log(item);
    this.onEdit.emit({item});
  }

  deleteProject(event, id){
    this.onDelete.emit({event:event, id:id});
  }

  toggleCard(){
    this.showCard = !this.showCard;
  }

}
