import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // empData member
  public empData = [];
  @Input() public messageFromApp;
  @Output() public passToApp = new EventEmitter();
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getEmpData()
    .subscribe(data => this.empData = data);
   // console.log(this.empData); aync call is not completed but this line executed even before that.
  }

  invokePassToApp(){
    this.passToApp.emit('shubham');
  }

}
