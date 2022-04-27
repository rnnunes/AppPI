import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCrtl: AlertController) { }

  ngOnInit() {
  }

  async alert() {
    const alert = await this.alertCrtl.create ({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader:'Atenção',
      message: 'Esta é uma mensagem de Alerta!!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertaMultiplosBotoes() {
    const alert = await this.alertCrtl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta Múltiplos',
      subHeader:'Múltiplos Botões',
      message: 'Este é um Alerta com Multiplos Botoes.',
      buttons: ['Cancelar', 'Abrir', 'Excluir']
    });

    await alert.present();
  }

}
