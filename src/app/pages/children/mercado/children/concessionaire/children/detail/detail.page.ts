import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { StatusPage } from '../status/status.page';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  DefaultImageProfile = '/assets/avatar.svg';
  PermissionsAsignated: any[] = [];
  dataDummy = [
    {
      name: 'Concesion',
      asignate: true
    },
    {
      name: 'Otros',
      asignate: false
    },
    {
      name: 'Terceros',
      asignate: null
    }
  ];
  constructor(
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.PermissionsAsignated = this.dataDummy;
  }

  changeStatus(){
    // call popover
  }
  async funcion(ev: any) {
    console.log ();
    const popover = await this.popoverController.create({
      component: StatusPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  async statusPermisologia(ev: any) {
    console.log ();
    const popover = await this.popoverController.create({
      component: StatusPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
