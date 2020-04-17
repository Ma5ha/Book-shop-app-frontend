import { Injectable } from '@angular/core';
import { FlashToken } from '@app/shared/flash/core/message'
@Injectable({
  providedIn: 'root'
})
export class FlashmessageService {

  flashToken: FlashToken

  SetMessage(message: FlashToken) {

    this.flashToken = message



  }

}
