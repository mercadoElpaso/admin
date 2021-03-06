import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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
        name: 'Jose Alvarez',
        description: 'V 12345678',
        renewalP: 'G-10',
      },
      {
        id: '2',
        name: 'Jose Perez',
        description: 'E 12345678',
        renewalP: 'A-1'
       },
      {
        id: '1',
        name: 'Jesus Alvarez',
        description: 'V 98765432',
        renewalP: 'H-1 H-2 H-3',
      }
    ]
  };
  constructor(
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
