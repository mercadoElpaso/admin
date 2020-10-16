import { Component, OnInit } from '@angular/core';

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
      name: 'Consecion',
      asignate: true
    },
    {
      name: 'Permiso 2',
      asignate: false
    }
  ];

  constructor() { }

  ngOnInit() {
    this.PermissionsAsignated = this.dataDummy;
  }

  changeStatus(){
    // call popover
  }

}
