import { Component } from '@angular/core';
import { CodebreakerService } from './codebreaker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-breaker-frontend';
  public number:number;
  public message:string;

  constructor(private codeBreaker: CodebreakerService){

  }

  setSecret(){
    this.codeBreaker.setSecret(this.number).subscribe((response:any)=>{
      this.message = response.message;
    })
  }

  guess(){
    this.codeBreaker.guess(this.number).subscribe((response:any)=>{
      this.message = response.result
    })
  }
}
