import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Colores } from '../model/colores.model';
import { ColoresService } from '../services/colores.service';



@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {
  formColores: FormGroup;
  id: string;

  constructor(private formBuilder: FormBuilder, private colores: ColoresService, private route : ActivatedRoute, private router: Router) {
    this.formColores = this.formBuilder.group({
      color1: [ '' , [Validators.required, Validators.minLength(2)]],
      color2: [ '' , [Validators.required]],
      color3: [ '' , [Validators.required]]
    });

    this.route.params.subscribe(parameters => {
      if (parameters.id){
        console.log(parameters.id);
        this.id = parameters.id;

        this.colores.getSingleColores(parameters.id).subscribe(res => {
          this.formColores.get('color1').setValue(res.color1);
          this.formColores.get('color2').setValue(res.color2);
          this.formColores.get('color3').setValue(res.color3);
        });
      }
    });
  }

  ngOnInit(): void {
  }

  saveClick (){
    const data= new Colores();
    data.color1 = this.formColores.get('color1').value;
    data.color2 = this.formColores.get('color2').value;
    data.color3 = this.formColores.get('color3').value;

    if (this.id){
      this.colores.updateColores(this.id, data).subscribe(() => {
        this.router.navigate(['list']);
      }, error => {
        alert ('occurrio un error al actualizar el elemento');
      });

    } else {
      this.colores.saveColores(data).subscribe(()=> {
        this.router.navigate(['list']);
      }, error => {
        alert ('occurrio un error al insertar');
      });

    this.colores.saveColores(data).subscribe(() => {
      alert('Elemento guardado exitosamente');
    }, error => {
      alert ('Error al insertar');
    });
   }
  }
}


