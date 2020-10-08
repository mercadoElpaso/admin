import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class Loading {

  constructor(
    private loading: LoadingController,
   // private translate: TranslateService
  ) { }

  async present(message = '') {
    const data: any = {};
    if (message.length > 0) {
     // data.message = this.translate.instant(message);
    }
    const loading = await this.loading.create(data);
    await loading.present();
    return loading;
  }

}
