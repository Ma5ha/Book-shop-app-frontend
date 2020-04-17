import { Component, Input, OnInit } from '@angular/core';
import { FlashmessageService } from '@app/shared/service/flashmessage.service'

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {
  @Input() component: string


  private flashFor: string = this.FlashMessage.flashToken.for
  flashType: string = this.FlashMessage.flashToken.type

  flashMessage: string = this.FlashMessage.flashToken.message

  constructor(private FlashMessage: FlashmessageService) {

  }

  ngOnInit(): void {
    this.render()
    console.log(this.FlashMessage.flashToken)

  }

  render(): boolean {
    if (this.component === this.flashFor) {
      return true
    } else {
      return false
    }

  }



  close(): void {


    this.FlashMessage.clearMessage()
    this.flashFor = this.FlashMessage.flashToken.for
    this.render()

    console.log(this.FlashMessage.flashToken)
  }
}
