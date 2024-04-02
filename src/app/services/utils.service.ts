import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AlertOptions, LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router);
  modalCtrl =inject(ModalController);

  alertCtrl = inject(AlertController);

  // ========== Take or Select Picture ==========

  async takePicture(promptLabelHeader: string){
      return await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
        promptLabelHeader,
        promptLabelPhoto: 'Select photo',
        promptLabelPicture: 'Take a picture',
      });
  }

  // ========== Alert ==========
  async presentAlert(opts?: AlertOptions) {
    const alert = await this.alertCtrl.create(opts);

    await alert.present();
  }

  // ========== Loading ==========
  loading(){
    return this.loadingCtrl.create({
      spinner: 'crescent'
    });
  }

   // ========== Toast ==========
   async presentToast(opts?:ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  // ========== Router ==========
  routerLink(url:string){
    return this.router.navigateByUrl(url);
  }


  // ========== Save Element in LocalStorage ==========
  saveInLocalStorage(key:string, value:any){
    return localStorage.setItem(key, JSON.stringify(value));
  }

  // ========== Get Element from LocalStorage ==========
  getFromLocalStorage(key:string){
    return JSON.parse(localStorage.getItem(key));
  }

  // ========== Modal  ==========
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if(data)return data;

  }

  dimissModal(data?:any){
    return this.modalCtrl.dismiss(data);
  }

}
