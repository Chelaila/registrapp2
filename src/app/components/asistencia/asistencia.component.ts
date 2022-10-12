import { Component, ElementRef, OnInit, ViewChild,  } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationController } from '@ionic/angular';
import { AlumnoService } from 'src/app/services/alumno.service';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { asignaturaSchema } from '../../models/Asignatura';
import mongoose from 'mongoose';



@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent implements OnInit {

  slidesConfig = {
    direction: 'horizontal',
    initialSlide: 0,
    spaceBetween: 1,
    slidesPerView: 1.3,
    centeredSlides: true,
    grabCursor: true,
    speed: 400,
  };
  alumnos = [];
  asignaturas = [];
  //lottie
  options: AnimationOptions = {
    path: 'assets/animations/code.json',
  };

  options2: AnimationOptions = {
    path: 'assets/animations/maths.json',
  };

  options3: AnimationOptions = {
    path: 'assets/animations/english.json',
  };

  options4: AnimationOptions = {
    path: 'assets/animations/church.json',
  };
  url = 'mongodb+srv://marcelo:1234@registrapp1.iczxlyf.mongodb.net/?retryWrites=true&w=majority';
  private animation: AnimationItem;
  @ViewChild('anim', { read: ElementRef, static: true }) animar2: ElementRef;





  constructor(
    private alumnoService: AlumnoService,
    private asignaturaService: AsignaturasService,
    private router: Router,
    private animationCtrl: AnimationController
  ) { }



  //services
  ngOnInit() {
    //info service asignatura
    this.asignaturas = this.asignaturaService.getProducts();
    console.log(this.asignaturas);
    mongoose.connect(this.url);
    const connection = mongoose.connection;
    connection.once('open', () => {
      // Logica de mongoose preguntando a la url localhost por la lista de asignaturas
      // asignaturaSchema. deberia tener la funcion de findAll
      console.log('Conectado');
    });
  }




  //Capturar Datos de la Animacion (para ser controlados) envio lista a la consola.
  created(animation: AnimationItem) {
    console.log(animation);
    this.animation = animation;
    const anim1 = animation.animationID;
    if (anim1 === '__lottie_element_106') {
      animation.playSpeed = 0.7;
    }
  }


  //animation title asistencia
  ngAfterViewInit() {
    const animarTitle = this.animationCtrl.create()
      .addElement(this.animar2.nativeElement)
      .duration(1500)
      .iterations(1)
      .fromTo('transform', 'translateY(-50px)', 'translateY(10px)')
      .fromTo('opacity', '0.2', '1');

    const animarCntrl = this.animationCtrl.create()
      .duration(5000)
      .iterations(Infinity)
      .addAnimation([animarTitle]);

    animarCntrl.play();
  }


}
