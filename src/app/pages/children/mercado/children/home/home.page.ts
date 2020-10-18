import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  initialData = (window as any).__INITIAL_DATA__;
  pageHandler: any = {
    records: []
  };
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
titulo = 'Concesionarios Pendientes';
loadingRecords = false;
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    // if(this.initialData.userID != '536891193569405430'){
    //   this.navCtrl.navigateForward(`/not-found`);
    // }
  this.inicioPantalla();
  this.concesionario(this.titulo);
  }

  inicioPantalla() {
    this.loadingRecords = true;
    setTimeout(() => {
      this.pageHandler = this.dataDummy;
      this.loadingRecords = false;
      }, 2000);
    }
  concesionario(indicador){
   switch (indicador){
    case 'azul':
      this.titulo = 'Concesionarios Pendientes';
      this.inicioPantalla();
      break;
    case 'verde':
      this.titulo = 'Concesionarios Asignados';
      this.inicioPantalla();
      break;
    case 'amarillo':
      this.titulo = 'Concesionarios por Asignar';
      this.inicioPantalla();
      break;
  }
  }
  getColorStatus(record){
    switch (record.status){
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

