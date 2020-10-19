import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  /*
  request:{
    current_page: 1,
    request_batch: 0,
    total_records: 0,
    total_pages: 0,
    filter: {
        supplier: '',
        identification: '',
        direction: '',
        name: '',
        status: ''
    }
  }

  response:{
  current_page: 1,
    request_batch: 0,
    total_records: 0,
    total_pages: 0,
    records: [{
      supplier: '',
        identification: '',
        direction: '',
        name: '',
        status: ''
    },{...}]
    }
  */

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
        supplier: 'Jose Alvarez',
        identification: 'V 12345678',
        direction: 'G-10',
        name: 'El local de jose',
        status: 'Asignado'
      },
      {
        id: '2',
        supplier: 'Jose Perez',
        identification: 'E 12345678',
        direction: 'A-1',
        name: 'Las carnes',
        status: 'Pendiente'
      },
      {
        id: '1',
        supplier: 'Jesus Alvarez',
        identification: 'V 98765432',
        direction: 'H-1 H-2 H-3',
        name: 'Verduras de la esquina',
        status: 'Por Asignar'
      }
    ]
  };
  filtro = true;
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
    this.navCtrl.navigateForward(`/concessionaire/detail`);
  }
  getColorStatus(record){
    switch (record.status) {
      case 'Pendiente':
        return 'primary';
        case 'Asignado':
          return 'success';
          case 'Por Asignar':
          return 'warning';
         default:
          return 'medium';
    }
  }


}
