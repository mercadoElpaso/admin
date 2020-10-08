import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.page.html',
  styleUrls: ['./mercado.page.scss'],
})
export class MercadoPage implements OnInit {

  initialData = (window as any).__INITIAL_DATA__;
  defaultProfileImage = '/assets/avatar.svg'

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    // if(this.initialData.userID != '536891193569405430'){
    //   this.navCtrl.navigateForward(`/not-found`);
    // }
  }

}
