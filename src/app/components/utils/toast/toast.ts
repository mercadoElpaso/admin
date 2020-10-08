import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class Toast {

  public types = {
    error: 'danger',
    success: 'success'
  };

  constructor(
    private toastController: ToastController/*,
    private translate: TranslateService*/
  ) { }

  /*async present(message: string, type: string = 'success', duration: number = 2000) {
    const toast = await this.toastController.create({ message: this.translate.instant(message), duration, color: type });
    toast.present();
  }*/

  async present(message: string, type: string = 'success', duration: number = 2000) {
    const toast = await this.toastController.create({ message, duration, color: type });
    toast.present();
  }

  error(message: string) {
    this.present(message, this.types.error);
  }

  success(message: string) {
    this.present(message);
  }
}
