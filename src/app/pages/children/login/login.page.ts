import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Toast } from 'src/app/components/utils/toast/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = '';
  password = '';
  initialData = (window as any).__INITIAL_DATA__;

  constructor(
    private toast: Toast,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  login(){
    if (this.user === 'admin' && this.password === 'adminMercado2020'){
      this.initialData.userID = '536891193569405430';
      this.navCtrl.navigateForward('/home');
    } else {
      this.toast.error('Combinación usuario/contrseña es incorrecta. Intentre de nuevo');
    }
  }

  forgotPass(){
    this.toast.error('Comuniquese con soporte técnico');
  }

}
