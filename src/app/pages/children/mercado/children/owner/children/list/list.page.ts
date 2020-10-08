import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  showQuantityRecordsOptions = [10, 20, 50, 100];
  batchCount = 10;
  filterBy = 'all';
  public filterKeyword = '';
  loadingRecords = false;
  fromDate: Date = new Date();
  toDate: Date = new Date();
  blankPage = {
    current_page: 1,
    request_batch: 0,
    total_records: 0,
    total_pages: 0,
    records: []
  };
  filterPage = 1;
  mounts: any;
  pageHandler: any = this.blankPage;
  confirmingPayment = false;
  dataDummy = {
    current_page: 1,
    request_batch: 0,
    total_records: 1,
    total_pages: 1,
    records: [
      {
        id: '1',
        name:'Jose Alvarez',
        identification: 'V 12345678',
        email: 'fullstrike@gmail.com',
        phone: '+00 00 0000 0000',
        status: 'Asignado'
      },
      {
        id: '2',
        name: 'Jose Perez',
        identification: 'E 12345678',
        email: 'appacs@hotmail.com',
        phone: '+00 00 0000 0000',
        status: 'Antiguo propietario'
      },
      {
        id: '1',
        name: 'Jesus Alvarez',
        identification: 'V 98765432',
        email: 'fullstrike@gmail.com',
        phone: '+00 00 0000 0000',
        status: 'Por asignar'
      }
    ]
  }
  constructor(
    private popoverController: PopoverController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.loadRecords();
  }

  loadRecords() {
    this.loadingRecords = true;
    setTimeout(() => {
      this.pageHandler = this.dataDummy;
      this.loadingRecords = false;
    }, 2000);
  }

  gotoDetail(record){
    this.navCtrl.navigateForward(`/owner/detail`);
  }


}
