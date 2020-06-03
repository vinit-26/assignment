import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  @Input() noteList: string;
  noteListArr = [];
  noteValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  getData(event){
    if(event.code === 'Enter' && event.target.value !== ''){
      this.noteListArr.push(event.target.value);
      this.noteValue = "";
    }else {

    }
  }
  deleteNote(index){
      this.noteListArr.splice(index,1);
  }
}