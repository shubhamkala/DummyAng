import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngBasics';
  private hasEnabled = true;
  private isDisabled = false;
  isTDisabled = false;
  hasError = true;
  successClass = "text-success";
  condProp=false;
  messageFromChild;
  colors = ["purple","red","green","orange"]
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError
  }
  
  message = {
    "color":"pink"
  }
  getIsEnabled() {
    return this.hasEnabled;
  }

  getIsDisabled() {
    return this.isDisabled;
  }

  highLightColor="orange";

  public styles= {
    color:"yellow",
    fontStyle:"italic"
  }
}
