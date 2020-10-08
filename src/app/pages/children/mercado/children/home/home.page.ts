import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  initialData = (window as any).__INITIAL_DATA__;
  
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    // if(this.initialData.userID != '536891193569405430'){
    //   this.navCtrl.navigateForward(`/not-found`);
    // }
  }

}
