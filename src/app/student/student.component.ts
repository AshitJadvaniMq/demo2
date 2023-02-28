import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() myInput: string | undefined
  @Output() myOutput :EventEmitter<any> = new EventEmitter<any>()
  outPutString= "Child to parent"
  constructor() { }

  ngOnInit(): void {
    console.log(this.myInput)
  }
  sendData(){
    this.myOutput.emit(this.outPutString)
  }

}
