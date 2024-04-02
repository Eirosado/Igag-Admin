import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AlertOptions, LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { UtilsService } from './utils.service';

jest.mock('@angular/core');
jest.mock('@angular/router');
jest.mock('@ionic/angular');
jest.mock('@capacitor/camera');

describe('UtilsService', () => {
  let instance;

  beforeEach(() => {
    instance = new UtilsService();
  });

  it('instance should be an instanceof UtilsService', () => {
    expect(instance instanceof UtilsService).toBeTruthy();
  });

  it('should have a method takePicture()', async () => {
    // await instance.takePicture(promptLabelHeader);
    expect(false).toBeTruthy();
  });

  it('should have a method presentAlert()', async () => {
    // await instance.presentAlert(opts);
    expect(false).toBeTruthy();
  });

  it('should have a method loading()', () => {
    // instance.loading();
    expect(false).toBeTruthy();
  });

  it('should have a method presentToast()', async () => {
    // await instance.presentToast(opts);
    expect(false).toBeTruthy();
  });

  it('should have a method routerLink()', () => {
    // instance.routerLink(url);
    expect(false).toBeTruthy();
  });

  it('should have a method saveInLocalStorage()', () => {
    // instance.saveInLocalStorage(key,value);
    expect(false).toBeTruthy();
  });

  it('should have a method getFromLocalStorage()', () => {
    // instance.getFromLocalStorage(key);
    expect(false).toBeTruthy();
  });

  it('should have a method presentModal()', async () => {
    // await instance.presentModal(opts);
    expect(false).toBeTruthy();
  });

  it('should have a method dimissModal()', () => {
    // instance.dimissModal(data);
    expect(false).toBeTruthy();
  });
});
