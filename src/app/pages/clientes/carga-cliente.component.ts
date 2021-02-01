import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
/* import { Subject } from 'rxjs'; */
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../model/cliente.model';

@Component({
  selector: 'app-carga-cliente',
  templateUrl: './carga-cliente.component.html',
  styleUrls: []
})
export class CargaClienteComponent implements OnInit {

  spinnerEnabled = false;
  keys: string[];
  data: any;
  registros_nuevos: number = 0;
  /* dataSheet = new Subject(); */
  @ViewChild('inputFile') inputFile: ElementRef;
  isExcelFile: boolean;

  constructor(public _clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  onChange(evt) {
    let header;
    const target: DataTransfer = <DataTransfer>(evt.target);
    this.isExcelFile = !!target.files[0].name.match(/(.xls|.xlsx)/);
    if (target.files.length > 1) {
      this.inputFile.nativeElement.value = '';
    }
    if (this.isExcelFile) {
      this.spinnerEnabled = true;
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        this.data = XLSX.utils.sheet_to_json(ws, {header:["descripcion","nacionalidad","provincia","numero_documento","tipo_documento","condicion_cliente"
                                                          ,"tipo_cliente","condicion_juridica","estado_contribuyente","condicion_tributaria"
                                                          ,"condicion_laboral","rango_etario","antiguedad_cliente","antiguedad_juridica"
                                                          ,"tipo_operacion","beneficiario_final","ejecutante","canal"], raw: false });
        console.log(this.data)
      };

      reader.readAsBinaryString(target.files[0]);

      reader.onloadend = (e) => {
        this.spinnerEnabled = false;
        this.keys = Object.keys(this.data[0]);
        //this.dataSheet.next(data)
      }
    } else {
      this.inputFile.nativeElement.value = '';
    }
  }

  removeData() {
    this.inputFile.nativeElement.value = '';
    /* this.dataSheet.next(null); */
    this.keys = null;
  }

  cargar() {
    this._clienteService.insertarCliente(this.data).subscribe( (resp: any) => {
      this.registros_nuevos = resp;
    });
  }


}
