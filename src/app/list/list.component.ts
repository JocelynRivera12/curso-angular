import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Colores } from '../model/colores.model';
import { ColoresService } from '../services/colores.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns = ['_id','color1', 'color2', 'color3','actions'];
  dataSource = new MatTableDataSource<Colores>();

  constructor(private colores: ColoresService, private router: Router) {
    this.colores.getColores().subscribe(res => {
      this.dataSource.data = res;
    });
   }

  ngOnInit(): void {
  }

  edit(id: string){
    this.router.navigate(['colores', id]);
  }

  delete(id: string){
    this.colores.deleteColores(id).subscribe(() => {
      this.refresh();
    }, error => {
      alert ('Ocurrió un error al eliminar el elemento');
    });
  }

  refresh(){
    this.colores.getColores().subscribe(res => {
      this.dataSource.data = res
    });
  }

}
